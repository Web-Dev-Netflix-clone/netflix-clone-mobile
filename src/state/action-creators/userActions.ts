import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const fakeLogin = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_USER_SUCCESS,
    });
  };
};

export const fakeLogout = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SIGNOUT_USER_SUCCESS,
    });
  };
};
