import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

import routes from './routes';
import { configureAuth } from './config/auth';

export default function createApp({ db }) {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cookieSession({
    maxAge: 60 * 1000 * 10, // 10 minutes,
    keys: ['randomkey']
  }))

  configureAuth(app);
  app.use((req, res, next) => {
    req.base = `${req.protocol}://${req.get('host')}`;
    // req.logger = logger;
    req.db = db;
    req.context = {};

    console.log(req.originalUrl)
    console.log(req.user);
    return next();
  });
  app.use(routes);
  // app.use(errorHandler);

  return app;
}


