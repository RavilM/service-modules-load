import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';

export const loadModuleRequest = (endpoint: string): Promise<IResponse> =>
  new PureRestRequest().getRequest({
    mode: 'cors',
    parseType: 'text',
    endpoint,
    // todo add schema
    // responseSchema,
    extraValidationCallback: () => true,
    customTimeout: 3000,
  });
