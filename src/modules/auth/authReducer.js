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
      return payload;
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
