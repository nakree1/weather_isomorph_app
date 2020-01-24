import { put, call, takeLatest, all, getContext } from 'redux-saga/effects';

import { fetchAll, fetchWeather, fetchWeatherByCity } from './weatherActions';
import { normalizePoints } from './helpers/normalizePoints';

export function* weatherWorker() {
  try {
    yield put(fetchWeather.request());
    const api = yield getContext('api');

    const citiesList = yield call(api.city.getList);

    const weather = yield all(citiesList.map((city) => call(api.weather.lastDay, city.id)));

    const flatten = weather.reduce((acc, val) => [...acc, ...val], []);

    const normalizedPoints = normalizePoints(flatten);

    yield put(
      fetchWeather.success({
        points: normalizedPoints,
        cities: citiesList
      })
    );
  } catch (err) {
    console.error(err);
    yield put(fetchWeather.failure());
  }
}

function* weatherByCityWorker({ payload }) {
  try {
    yield put(fetchWeatherByCity.request(payload));
    const api = yield getContext('api');

    const weather = yield call(api.weather.lastDay, payload);

    const normalizedPoints = normalizePoints(weather);

    yield put(
      fetchWeatherByCity.success({
        cityId: payload,
        points: normalizedPoints
      })
    );
  } catch (err) {
    console.error(err);
    yield put(fetchWeatherByCity.failure(payload));
  }
}

export function* weatherWatcher() {
  yield all([
    takeLatest(fetchWeather.TRIGGER, weatherWorker),
    takeLatest(fetchWeatherByCity.TRIGGER, weatherByCityWorker)
  ]);
}
