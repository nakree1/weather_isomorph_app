import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

export function createStoreWithSaga(context) {
  const sagaMiddleware = createSagaMiddleware({ context });
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
}
