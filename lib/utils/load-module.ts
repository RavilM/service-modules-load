import { IResponse } from '@mihanizm56/fetch-api';
import { requireModule } from './require-module';
import { loadModuleRequest } from "../api/load-module";

const cachedScripts = new Map();

type ParamsType = {
  name: string;
  staticURL: string;
  jsUrl: string;
};

export const loadModule = ({ name, staticURL, jsUrl }: ParamsType) => {
  const endpoint = `${staticURL}/${jsUrl}`;
  let promise;

  if (cachedScripts.has(endpoint)) {
    promise = cachedScripts.get(endpoint);
  } else {
    promise = new Promise(async resolve => {
      try {
        const { data, error, errorText } = (await loadModuleRequest(
          endpoint,
        )) as IResponse & { data: string };

        if (error) {
          throw new Error(errorText);
        }

        const source = data.replace(
          /publicPathForReplace/,
          `${staticURL}/umd/`,
        );

        // eslint-disable-next-line no-new-func
        const extensionFn = new Function(
          'exports',
          'require',
          'module',
          source,
        );

        const module = {
          exports: {},
        };

        extensionFn(module.exports, requireModule, module);

        resolve(module.exports);
      } catch (error) {
        console.error('fetching the route script ended with an error', error);
      }
    });

    cachedScripts.set(endpoint, promise);
  }

  return promise.then((component: any) => {
    if (component) {
      return component;
    }

    console.error(`"${name}" was not created by "${endpoint}"`);
  });
};
