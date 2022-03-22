import { ActionType } from '../action-types';
import { Action, Dispatch } from 'redux';

export const searchActive = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_ACTIVE,
    });
  };
};

export const searchInActive = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_INACTIVE,
    });
  };
};

export const hideMainNav = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HIDE_MAINNAV,
    });
  };
};
