import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createApiService } from './config/api';
import { createStoreWithSaga } from './config/store';
import App from './components/App';

import './scss/index.scss';


const { api } = createApiService();
const store = createStoreWithSaga({ api });

const root = document.getElementById('root');

const Application = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)


if (root.hasChildNodes() === true) {
  ReactDOM.hydrate(Application, root);
} else {
  ReactDOM.render(Application, root);
}

