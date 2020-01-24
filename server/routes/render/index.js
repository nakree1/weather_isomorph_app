import { Router } from 'express';

import routing from '../../../src/config/routing';
import axiosConfigMiddleware from '../../middlewares/axiosConfigMiddleware';
import createStoreMiddleware from '../../middlewares/createStoreMiddleware';
import renderMiddleware from '../../middlewares/renderMiddleware';

import anyPage from './anyPage';
import weatherPage from './weatherPage';

export default Router()
  .use(axiosConfigMiddleware)
  .use(createStoreMiddleware)
  .use(renderMiddleware)
  .get(routing().weather, weatherPage)
  .get(routing().root, weatherPage)
  .get('*', anyPage);
