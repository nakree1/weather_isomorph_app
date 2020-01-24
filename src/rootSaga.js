import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './modules/auth/authWorkers';
import { weatherWatcher } from './modules/weather/weatherWorkers';

export default function* rootSaga() {
  yield all([fork(authWatcher), fork(weatherWatcher)]);
}
