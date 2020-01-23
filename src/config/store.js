import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';
import { authSelectors } from '../modules/auth/authSelectors';
import { pushLogin } from '../modules/auth/authActions';

function hydrateStore() {
  if (window.__PRELOADED_STATE__) {
    const decodedState = decodeURIComponent(window.__PRELOADED_STATE__);

    console.log(JSON.parse(decodedState))

    return JSON.parse(decodedState);
  }

  return;
}

function authorizeAfterHydration(store) {
  const isAuth = authSelectors.isAuth(store.getState());

  if (!isAuth) {
    store.dispatch(pushLogin)
  }
}

export function createStoreWithSaga(context) {
  const sagaMiddleware = createSagaMiddleware({ context });
  const store = createStore(rootReducer, hydrateStore(), composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  authorizeAfterHydration(store);

  return store;
}
