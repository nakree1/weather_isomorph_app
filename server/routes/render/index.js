import { Router } from 'express';

import axiosConfigMiddleware from '../../middlewares/axiosConfigMiddleware';
import createStoreMiddleware from '../../middlewares/createStoreMiddleware';
import renderMiddleware from '../../middlewares/renderMiddleware';
import { loginWorker } from '../../../src/modules/auth/authWorkers';

export default Router()
  .use(axiosConfigMiddleware)
  .use(createStoreMiddleware)
  .use(renderMiddleware)
  .get('*', async (req, res) => {
    res.store
      .runSaga(loginWorker)
      .toPromise()
      .then(() => {
        res.render();
      })
      .catch(err => {
        console.error('catch', err);
        res.status(500).end(err);
      })
  });
