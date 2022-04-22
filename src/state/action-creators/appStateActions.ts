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

export const myListActive = () => {
  return {
    type: ActionType.MYLIST_ACTIVE,
  };
};

export const myListInActive = () => {
  return {
    type: ActionType.MYLIST_INACTIVE,
  };
};

export const addMovieToMyList = (movieId: string) => {
  return {
    type: ActionType.ADD_MOVIE_TO_MYLIST,
    payload: movieId,
  };
};

export const removeMovieFromMyList = (movieId: string) => {
  return {
    type: ActionType.REMOVE_MOVIE_FROM_MYLIST,
    payload: movieId,
  };
};

export const showNotificationToggle = (message: string) => {
  return {
    type: ActionType.SHOW_NOTIFICATION_TOGGLE,
    payload: message,
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
