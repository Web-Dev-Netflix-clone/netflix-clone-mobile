import { ActionType } from '../action-types';
import { TAppStateAction } from './../actionsInterfaces/appStateInterfaces';

export interface AppState {
  loading: boolean;
  error: string | null;
  searchActive: boolean;
  myListActive: boolean;
  hideMainNav: boolean;
  showNotification: boolean;
  notificationMessage: string;
  scrollYZero: boolean;
  showBottomSheet: boolean;
  showDiscoverNav: boolean;
  currentRoute: string;
  myList: string[];
}

const initialState = {
  loading: false,
  error: null,
  searchActive: false,
  myListActive: false,
  hideMainNav: false,
  showNotification: false,
  notificationMessage: 'Add to My List',
  scrollYZero: true,
  showBottomSheet: false,
  showDiscoverNav: true,
  currentRoute: '',
  myList: ['41154', '38700', '614917'],
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
        myList: [...state.myList].find((movieId) => movieId === action.payload)
          ? [...state.myList]
          : [...state.myList, action.payload],
      };
    case ActionType.REMOVE_MOVIE_FROM_MYLIST:
      return {
        ...state,
        myList: [...state.myList].filter(
          (movieId) => movieId !== action.payload
        ),
      };

    case ActionType.SHOW_NOTIFICATION_TOGGLE:
      return {
        ...state,
        showNotification: !state.showNotification,
        notificationMessage: action.payload,
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
