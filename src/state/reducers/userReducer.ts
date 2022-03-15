import { TLoginUserAction } from './../actionsInterfaces/userInterfaces';
import { ActionType } from '../action-types';

export interface UserState {
  loading: boolean;
  error: string | null;
  user: any;
  isLoggedIn: boolean;
}

const initialState = {
  loading: false,
  error: null,
  user: null,
  isLoggedIn: false,
};

// We moeten nog even kijken in hoeverre we deze kunnen hergebruiken maar het typen van
// Redux enzo is best wel complex dus ik heb even dit is voorbeeld in de repo gehouden.

export const reducer = (
  state: UserState = initialState,
  action: TLoginUserAction
): UserState => {
  switch (action.type) {
    case ActionType.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
      };

    case ActionType.SIGNUP_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ActionType.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
      };

    case ActionType.SIGNIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ActionType.SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
        isLoggedIn: false,
      };

    case ActionType.SIGNOUT_USER_ERROR: {
      return {
        ...state,
        loading: false,
        user: null,
        isLoggedIn: false,
      };
    }

    case ActionType.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        isLoggedIn: true,
      };

    case ActionType.FETCH_USER_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
