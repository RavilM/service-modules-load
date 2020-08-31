import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as ReduxSaga from 'redux-saga';
import * as Joi from '@hapi/joi';
import * as ReactRouter from 'react-router5';
import * as Router from 'router5';
import * as RouterHelpers from 'router5-helpers';
import * as RouterPluginBrowser from 'router5-plugin-browser';
import * as RouterPluginLogger from 'router5-plugin-logger';
import * as serviceRouter from '@wildberries/service-router';
import * as reduxCoreModules from '@wildberries/redux-core-modules';
import * as servicePlatform from '@wildberries/service-platform';
import * as serviceUser from '@wildberries/service-user';
import * as i18nextUtils from '@wildberries/i18next-utils';
// import * as notifications from "@wildberries/notifications"
import * as i18next from 'i18next';
import * as serviceProducts from '../index';

const modules: any = {
  react: React,
  'react-dom': ReactDOM,
  'react-redux': ReactRedux,
  'redux-saga': ReduxSaga,
  'react-router5': ReactRouter,
  router5: Router,
  'router5-helpers': RouterHelpers,
  'router5-plugin-browser': RouterPluginBrowser,
  'router5-plugin-logger': RouterPluginLogger,
  '@wildberries/service-router': serviceRouter,
  '@wildberries/redux-core-modules': reduxCoreModules,
  '@wildberries/service-platform': servicePlatform,
  '@wildberries/service-products': serviceProducts,
  '@wildberries/service-user': serviceUser,
  '@wildberries/i18next-utils': i18nextUtils,
  '@hapi/joi': Joi,
  i18next,
};

// productSysName may be user in the future
export const requireModule = (productSysName: string, moduleId: string): any => modules[moduleId];

