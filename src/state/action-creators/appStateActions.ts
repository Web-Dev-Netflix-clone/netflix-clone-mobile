import { ActionType } from '../action-types';

export const searchActive = () => {
  return {
    type: ActionType.SEARCH_ACTIVE,
  };
};

export const searchInActive = () => {
  return {
    type: ActionType.SEARCH_INACTIVE,
  };
};

export const hideMainNav = () => {
  return {
    type: ActionType.HIDE_MAINNAV,
  };
};
export const showMainNav = () => {
  return {
    type: ActionType.SHOW_MAINNAV,
  };
};

export const scrollYZeroTrue = () => {
  return {
    type: ActionType.SCROLLY_ZERO_TRUE,
  };
};

export const scrollYZeroFalse = () => {
  return {
    type: ActionType.SCROLLY_ZERO_FALSE,
  };
};

export const showBottomSheet = () => {
  return {
    type: ActionType.SHOW_BOTTOMSHEET,
  };
};
export const hideBottomSheet = () => {
  return {
    type: ActionType.HIDE_BOTTOMSHEET,
  };
};

export const hideDiscoverNav = () => {
  return {
    type: ActionType.HIDE_DISCOVERNAV,
  };
};

export const showDiscoverNav = () => {
  return {
    type: ActionType.SHOW_DISCOVERNAV,
  };
};

export const changeCurrentRoute = (routeName: string) => {
  return {
    type: ActionType.CHANGE_CURRENTROUTE,
    payload: routeName,
  };
};
