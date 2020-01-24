import { createRoutine } from 'redux-saga-routines';

export const fetchWeather = createRoutine('WEATHER_FETCH');
export const fetchWeatherByCity = createRoutine('WEATHER_BY_CITY_FETCH');

export const clearAll = createRoutine('WEATHER/CLEAR_ALL');
