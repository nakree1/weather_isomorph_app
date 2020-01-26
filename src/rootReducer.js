import { combineReducers } from 'redux';

import { auth } from './modules/auth/authReducer';
import { weather } from './modules/weather/weatherReducer';
import { pushLogout } from './modules/auth/authActions';

const appReducer = combineReducers({
  auth,
  weather
});

export default (state, action) => {
  if (action.type === pushLogout.SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};
