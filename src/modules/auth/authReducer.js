import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './authActions';
import { makeStatusReducer } from '../helpers/reduxHelpers';

const isAuth = handleActions(
  {
    [actions.pushLogin.SUCCESS]() {
      return true;
    }
  },
  false
);

const profile = handleActions(
  {
    [actions.pushLogin.SUCCESS](state, { payload }) {
      const { displayName, emails, photos } = payload;

      const profile = {
        fullName: displayName,
        email: emails[0] && emails[0].value,
        avatar: photos[0] && photos[0].value
      }

      return profile;
    }
  },
  null
);

const status = makeStatusReducer(actions.pushLogin);

export const auth = combineReducers({
  isAuth,
  status,
  profile,
});
