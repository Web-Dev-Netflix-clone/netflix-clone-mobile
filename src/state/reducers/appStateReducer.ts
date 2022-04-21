import { ActionType } from '../action-types';
import { TAppStateAction } from './../actionsInterfaces/appStateInterfaces';

export interface AppState {
  loading: boolean;
  error: string | null;
  searchActive: boolean;
  myListActive: boolean;
  hideMainNav: boolean;
  scrollYZero: boolean;
  showBottomSheet: boolean;
  showDiscoverNav: boolean;
  currentRoute: string;
  myList: any[];
}

const initialState = {
  loading: false,
  error: null,
  searchActive: false,
  myListActive: false,
  hideMainNav: false,
  scrollYZero: true,
  showBottomSheet: false,
  showDiscoverNav: true,
  currentRoute: '',
  myList: [
    '580489',
    '753232',
    '297761',
    '431693',
    '82700',
    '41154',
    '38700',
    '614917',
    '8960',
  ],
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
        myListActive: false,
      };

    case ActionType.SEARCH_INACTIVE:
      return {
        ...state,
        searchActive: false,
        myListActive: false,
      };
    case ActionType.MYLIST_ACTIVE:
      return {
        ...state,
        searchActive: false,
        myListActive: true,
      };

    case ActionType.MYLIST_INACTIVE:
      return {
        ...state,
        searchActive: false,
        myListActive: false,
      };

    case ActionType.ADD_MOVIE_TO_MYLIST:
      return {
        ...state,
        myList: [...state.myList, action.payload],
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

    case ActionType.SHOW_DISCOVERNAV:
      return {
        ...state,
        showDiscoverNav: true,
      };

    case ActionType.HIDE_DISCOVERNAV:
      return {
        ...state,
        showDiscoverNav: false,
      };

    case ActionType.CHANGE_CURRENTROUTE:
      return {
        ...state,
        currentRoute: action.payload,
      };

    default:
      return state;
  }
};
