import { TAppStateAction } from './../actionsInterfaces/appStateInterfaces';
import { ActionType } from '../action-types';

export interface AppState {
  loading: boolean;
  error: string | null;
  searchActive: boolean;
}

const initialState = {
  loading: false,
  error: null,
  searchActive: false,
};

export const reducer = (
  state: AppState = initialState,
  action: TAppStateAction
): AppState => {
  switch (action.type) {
    case ActionType.SEARCH_ACTIVE:
      console.log('inside active');
      return {
        ...state,
        searchActive: true,
      };

    case ActionType.SEARCH_INACTIVE:
      console.log('inside inactive');
      return {
        ...state,
        searchActive: false,
      };

    default:
      return state;
  }
};
