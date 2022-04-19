import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const fakeLogin = () => {
  return {
    type: ActionType.FETCH_USER_SUCCESS,
  };
};

export const fakeLogout = () => {
  return {
    type: ActionType.SIGNOUT_USER_SUCCESS,
  };
};
