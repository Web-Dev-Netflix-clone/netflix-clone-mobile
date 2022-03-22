import { TAppStateAction } from './../actionsInterfaces/appStateInterfaces';
import { ActionType } from '../action-types';

export interface AppState {
  loading: boolean;
  error: string | null;
  searchActive: boolean;
  hideMainNav: boolean;
}

const initialState = {
  loading: false,
  error: null,
  searchActive: false,
  hideMainNav: false,
};

export const reducer = (
  state: AppState = initialState,
  action: TAppStateAction
): AppState => {
  switch (action.type) {
    case ActionType.SEARCH_ACTIVE:
      // console.log('inside active');
      return {
        ...state,
        searchActive: true,
      };

    case ActionType.SEARCH_INACTIVE:
      // console.log('inside inactive');
      return {
        ...state,
        searchActive: false,
      };

    case ActionType.HIDE_MAINNAV:
      console.log('INSIDE HIDE MAIN NAV');
      return {
        ...state,
        hideMainNav: true,
      };

    default:
      return state;
  }
};
