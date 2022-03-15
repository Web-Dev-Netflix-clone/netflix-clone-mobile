import { ActionType } from '../action-types/index';

export interface SearchActive {
  type: ActionType.SEARCH_ACTIVE;
}

export interface SearchInActive {
  type: ActionType.SEARCH_INACTIVE;
}

export type TAppStateAction = SearchActive | SearchInActive
