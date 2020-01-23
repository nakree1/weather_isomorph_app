import { put, call, takeLatest, all, getContext } from 'redux-saga/effects';

import { pushLogin } from './authActions';


function* loginWorker() {
  try {
    yield put(pushLogin.request());

    const api = yield getContext('api');
    const profile = yield call(api.auth.getUserData);

    yield put(pushLogin.success(profile));
  } catch (err) {
    console.error(err);
    yield put(pushLogin.failure());
  }
}

export function* authWatcher() {
  yield all([
    takeLatest(pushLogin.TRIGGER, loginWorker)
  ]);
}
