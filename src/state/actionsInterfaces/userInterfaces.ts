import { ActionType } from './../action-types/index';

// TEST USER  INTERFACE
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignupUserSucessAction {
  type: ActionType.SIGNUP_USER_SUCCESS;
  payload: User;
}

export interface SignupUserErrorAction {
  type: ActionType.SIGNUP_USER_ERROR;
  payload: string;
}

export interface SigninUserSucessAction {
  type: ActionType.SIGNIN_USER_SUCCESS;
  payload: User;
}

export interface SigninUserErrorAction {
  type: ActionType.SIGNIN_USER_ERROR;
  payload: string;
}

export interface SignoutUserSucessAction {
  type: ActionType.SIGNOUT_USER_SUCCESS;
  payload: User;
}

export interface SignoutUserErrorAction {
  type: ActionType.SIGNOUT_USER_ERROR;
  payload: string;
}

export interface SignoutUserSuccessAction {
  type: ActionType.SIGNOUT_USER_SUCCESS;
  payload: string;
}

export interface SignoutUserErrorAction {
  type: ActionType.SIGNOUT_USER_ERROR;
  payload: string;
}

export interface FetchUserSuccessAction {
  type: 'fetch_user_success';
  payload: User;
}

export interface FetchUserErrorAction {
  type: 'fetch_user_error';
  payload: string;
}

export type TLoginUserAction =
  | SignupUserSucessAction
  | SignupUserErrorAction
  | SigninUserSucessAction
  | SigninUserErrorAction
  | SignoutUserSuccessAction
  | SignoutUserErrorAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
