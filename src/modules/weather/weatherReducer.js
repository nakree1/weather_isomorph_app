import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './weatherActions';
import { makeStatusReducer } from '../helpers/reduxHelpers';

const status = makeStatusReducer(actions.fetchWeather);

const citiesById = handleActions(
  {
    [actions.fetchWeather.SUCCESS](state, { payload }) {
      const byId = {};

      payload.cities.forEach((city) => {
        const { id, name } = city;

        byId[id] = {
          name: name
        };
      });

      return byId;
    },
    [actions.fetchWeatherByCity.REQUEST](state, { payload: cityId }) {
      const copy = { ...state };

      copy[cityId] = {
        ...copy[cityId],
        isFetching: true
      };

      return copy;
    },
    [actions.fetchWeatherByCity.SUCCESS](state, { payload }) {
      const copy = { ...state };
      const { cityId } = payload;

      copy[cityId] = {
        ...copy[cityId],
        isFetching: false
      };

      return copy;
    },
    [actions.fetchWeatherByCity.FAILURE](state, { payload: cityId }) {
      const copy = { ...state };

      copy[cityId] = {
        ...copy[cityId],
        isFetching: false
      };

      return copy;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const citiesIdList = handleActions(
  {
    [actions.fetchWeather.SUCCESS](state, { payload }) {
      return payload.cities.map((city) => city.id);
    },
    [actions.clearAll.TRIGGER]() {
      return [];
    }
  },
  []
);

const pointsByCityId = handleActions(
  {
    [actions.fetchWeather.SUCCESS](state, { payload }) {
      return payload.points;
    },
    [actions.fetchWeatherByCity.SUCCESS](state, { payload }) {
      const { points, cityId } = payload;

      return { ...state, [cityId]: points[cityId] };
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

export const weather = combineReducers({
  status,
  citiesIdList,
  citiesById,
  pointsByCityId
});
