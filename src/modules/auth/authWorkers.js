import { put, call, takeLatest, all, getContext } from 'redux-saga/effects';

import { pushLogin, pushLogout } from './authActions';

function* logoutWorker() {
  try {
    const api = yield getContext('api');
    yield call(api.auth.logout);
  } catch (err) {
    console.error(err);
  } finally {
    yield put(pushLogout.success());
  }
}

export function* loginWorker() {
  try {
    yield put(pushLogin.request());

    const api = yield getContext('api');
    const profile = yield call(api.auth.getUserData);

    yield put(pushLogin.success(profile));
  } catch (err) {
    yield put(pushLogin.failure());
  }
}

export function* authWatcher() {
  yield all([
    takeLatest(pushLogin.TRIGGER, loginWorker),
    takeLatest(pushLogout.TRIGGER, logoutWorker)
  ]);
}
