import { call } from 'redux-saga/effects'
import { loginWorker } from '../../../src/modules/auth/authWorkers';
import { weatherWorker } from '../../../src/modules/weather/weatherWorkers';

function* weatherSaga() {
  yield call(loginWorker);
  yield call(weatherWorker);
}

export default async (req, res) => {
  res.store
    .runSaga(weatherSaga)
    .toPromise()
    .then(() => {
      res.render();
    })
    .catch(err => {
      res.status(500).end(err);
    })
}
