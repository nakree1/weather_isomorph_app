import express from 'express';
import path from 'path';
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
    maxAge: 60 * 1000 * 10 * 12, // 10 * 12 minutes,
    keys: ['randomkey']
  }))

  configureAuth(app);
  console.log(path.resolve(__dirname, "..", "build"))
  app.use(
    express.static(path.resolve(__dirname, "..", "build"), {
      maxAge: "10d",
      index: false
    })
  );
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


