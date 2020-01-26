import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../../src/rootReducer';

export default (req, res, next) => {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      api: res.api
    }
  });

  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run;

  res.store = store;

  next();
};
