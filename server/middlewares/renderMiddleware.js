import React from 'react';
import path from 'path';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import App from '../../src/components/App';

const htmlPath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

const html = fs.readFileSync(htmlPath, { encoding: 'UTF-8'});

export default (req, res, next) => {
  res.render = render.bind(this, req, res);
  next();
};

function render(req, res) {
  const routerContext = {};


  const Application = (
    <Provider store={res.store}>
      <StaticRouter location={req.url} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const updatedState = res.store.getState();
  console.log('state', updatedState)
  const jsonState = encodeURIComponent(JSON.stringify(updatedState));



  const jsx = ReactDOMServer.renderToString(Application);

  if (routerContext.url) {
    console.log('REDIRECT')
    res.redirect(301, routerContext.url);
  }

  const hydratedHtml = html
    .slice()
    .replace('<div id="root"></div>', `<div id="root">${jsx}</div>`)
    .replace(
      '<script id="ssr-state"></script>',
      `<script id="ssr-state">window.__PRELOADED_STATE__="${jsonState}"</script>`
    );

  res.send(hydratedHtml);
}
