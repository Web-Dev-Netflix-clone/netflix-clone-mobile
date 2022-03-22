// import { Action } from 'redux';
import { ActionType } from '../action-types/index';

export interface SearchActive {
  type: ActionType.SEARCH_ACTIVE;
}

export interface SearchInActive {
  type: ActionType.SEARCH_INACTIVE;
}

export interface HideMainNav {
  type: ActionType.HIDE_MAINNAV;
}

export type TAppStateAction = SearchActive | SearchInActive | HideMainNav;
