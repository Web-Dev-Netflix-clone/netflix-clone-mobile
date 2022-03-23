import { TAppStateAction } from './../actionsInterfaces/appStateInterfaces';
import { ActionType } from '../action-types';

export interface AppState {
  loading: boolean;
  error: string | null;
  searchActive: boolean;
  hideMainNav: boolean;
  scrollYZero: boolean;
  showBottomSheet: boolean;
}

const initialState = {
  loading: false,
  error: null,
  searchActive: false,
  hideMainNav: false,
  scrollYZero: true,
  showBottomSheet: false,
};

export const reducer = (
  state: AppState = initialState,
  action: TAppStateAction
): AppState => {
  switch (action.type) {
    case ActionType.SEARCH_ACTIVE:
      return {
        ...state,
        searchActive: true,
      };

    case ActionType.SEARCH_INACTIVE:
      return {
        ...state,
        searchActive: false,
      };

    case ActionType.HIDE_MAINNAV:
      return {
        ...state,
        hideMainNav: true,
      };

    case ActionType.SHOW_MAINNAV:
      return {
        ...state,
        hideMainNav: false,
      };

    case ActionType.SCROLLY_ZERO_TRUE: {
      return {
        ...state,
        scrollYZero: true,
      };
    }

    case ActionType.SCROLLY_ZERO_FALSE: {
      return {
        ...state,
        scrollYZero: false,
      };
    }

    case ActionType.SHOW_BOTTOMSHEET:
      return {
        ...state,
        showBottomSheet: true,
      };

    case ActionType.HIDE_BOTTOMSHEET:
      return {
        ...state,
        showBottomSheet: false,
      };

    default:
      return state;
  }
};
