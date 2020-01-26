import { handleActions } from 'redux-actions';

import { FAILURE, NONE, REQUEST, SUCCESS } from '../../config/constants';

export function makeStatusReducer(action) {
  return handleActions(
    {
      [action.REQUEST]() {
        return REQUEST;
      },
      [action.SUCCESS]() {
        return SUCCESS;
      },
      [action.FAILURE]() {
        return FAILURE;
      },
      [action.FULFILL]() {
        return NONE;
      }
    },
    NONE
  );
}
