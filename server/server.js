import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

import routes from './routes';
import configureAuth from './config/auth';
import errorHandler from './middlewares/errorHandler';

export default function createApp({ db }) {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cookieSession({
    maxAge: 60 * 1000 * 60 * 2, // 2 hours,
    keys: ['randomkey']
  }))

  configureAuth(app);
  app.use(
    express.static(path.resolve(__dirname, "..", "build"), {
      maxAge: "10d",
      index: false
    })
  );
  app.use((req, res, next) => {
    req.base = `${req.protocol}://${req.get('host')}`;
    req.db = db;

    return next();
  });
  app.use(routes);
  app.use(errorHandler);

  return app;
}


