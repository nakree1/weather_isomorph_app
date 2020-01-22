import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

export default function createApp({ db }) {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    req.base = `${req.protocol}://${req.get('host')}`;
    // req.logger = logger;
    req.db = db;
    req.context = {};

    console.log(req.originalUrl)
    return next();
  });
  app.use(routes);
  // app.use(errorHandler);

  return app;
}


