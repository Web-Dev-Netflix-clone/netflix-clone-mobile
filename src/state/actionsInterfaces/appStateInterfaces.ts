import { ActionType } from '../action-types/index';

export interface SearchActive {
  type: ActionType.SEARCH_ACTIVE;
}

export interface SearchInActive {
  type: ActionType.SEARCH_INACTIVE;
}
export interface MyListActive {
  type: ActionType.MYLIST_ACTIVE;
}

export interface MyListInActive {
  type: ActionType.MYLIST_INACTIVE;
}

export interface AddMovieToMyList {
  type: ActionType.ADD_MOVIE_TO_MYLIST;
  payload: any;
}
export interface RemoveMovieFromMyList {
  type: ActionType.REMOVE_MOVIE_FROM_MYLIST;
  payload: any;
}

export interface HideMainNav {
  type: ActionType.HIDE_MAINNAV;
}

export interface showMainNav {
  type: ActionType.SHOW_MAINNAV;
}

export interface showNotifcationToggle {
  type: ActionType.SHOW_NOTIFICATION_TOGGLE;
}

export interface scrollYZeroTrue {
  type: ActionType.SCROLLY_ZERO_TRUE;
}
export interface scrollYZeroFalse {
  type: ActionType.SCROLLY_ZERO_FALSE;
}

export interface showBottomSheet {
  type: ActionType.SHOW_BOTTOMSHEET;
}

export interface hideBottomSheet {
  type: ActionType.HIDE_BOTTOMSHEET;
}

export interface showDiscoverNav {
  type: ActionType.SHOW_DISCOVERNAV;
}

export interface hideDiscoverNav {
  type: ActionType.HIDE_DISCOVERNAV;
}

export interface changeCurrentRoute {
  type: ActionType.CHANGE_CURRENTROUTE;
  payload: string;
}

export type TAppStateAction =
  | SearchActive
  | SearchInActive
  | MyListActive
  | MyListInActive
  | AddMovieToMyList
  | RemoveMovieFromMyList
  | HideMainNav
  | showMainNav
  | showNotifcationToggle
  | scrollYZeroFalse
  | scrollYZeroTrue
  | showBottomSheet
  | hideBottomSheet
  | showDiscoverNav
  | hideDiscoverNav
  | changeCurrentRoute;
