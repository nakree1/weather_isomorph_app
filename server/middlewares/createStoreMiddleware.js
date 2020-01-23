import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";

import rootReducer from '../../src/rootReducer';

export default (req, res, next) => {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      api: res.api
    }
  });

  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  res.store = store;
  next();
};
