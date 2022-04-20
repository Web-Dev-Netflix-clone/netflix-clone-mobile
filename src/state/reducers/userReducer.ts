import { ActionType } from '../action-types';
import { TLoginUserAction } from './../actionsInterfaces/userInterfaces';

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
