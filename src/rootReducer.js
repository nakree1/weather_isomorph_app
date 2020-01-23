import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createRoutine } from 'redux-saga-routines';
// import { auth } from './modules/auth/authReducer';
// import { settings } from './modules/settings/settingsReducer';
// import { pushLogout } from './modules/auth/authActions';
// import { pushDeleteProfile } from './modules/settings/settingsActions';

const test = createRoutine('test');

const auth = handleActions({
  [test.TRIGGER]() {
    return null
  }
}, null)

const appReducer = combineReducers({
  auth,
  // settings
});

export default (state, action) => {
  // if (action.type === pushLogout.TRIGGER) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};
