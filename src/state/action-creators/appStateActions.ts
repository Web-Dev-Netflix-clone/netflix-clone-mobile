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
export const showMainNav = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW_MAINNAV,
    });
  };
};

export const scrollYZeroTrue = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SCROLLY_ZERO_TRUE,
    });
  };
};

export const scrollYZeroFalse = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SCROLLY_ZERO_FALSE,
    });
  };
};

export const showBottomSheet = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW_BOTTOMSHEET,
    });
  };
};
export const hideBottomSheet = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HIDE_BOTTOMSHEET,
    });
  };
};

export const hideDiscoverNav = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HIDE_DISCOVERNAV,
    });
  };
};

export const showDiscoverNav = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW_DISCOVERNAV,
    });
  };
};
