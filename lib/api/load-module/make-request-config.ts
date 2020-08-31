import { IRequestParams } from '@mihanizm56/fetch-api';

export type RequestParamsType = {
  endpoint: string;
  appNamespace: string;
};

export const makeRequestConfig = ({
  endpoint,
  appNamespace,
}: RequestParamsType): IRequestParams => ({
  endpoint: endpoint,
  body: {
    method: 'getMainMenu',
    params: {
      scope: appNamespace,
    },
  },
  customTimeout: 3000,
  // responseSchema,
  // todo add schema
  extraValidationCallback: () => true,
});
