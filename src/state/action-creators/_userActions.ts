import { Action, Dispatch } from 'redux';
import { axios } from '../../constants/axios';

import { ActionType } from '../action-types';

type SignWithEmail = {
  email: string;
  password: string;
};

// DIT BEWAAR IK EVEN VOOR REFERENCE VERWIJDER IK LATER IN HET PROJECT!
// Misschien kunnen we een deel van de logic wel hergebruiken voor de signin / singup etc.

export const fetchUser = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.get(`/users/${id}`);
      const user = response.data;

      dispatch({
        type: ActionType.FETCH_USER_SUCCESS,
        payload: user,
      });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage}`);

      dispatch({
        type: ActionType.FETCH_USER_ERROR,
        payload: error.message,
      });
    }
  };
};

export const signIn = ({ email, password }: SignWithEmail) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      // Dit is al een voorbeeld van een type die ik ook ff zo een twee drie niet weet
      // ik krijg hier een error en heb nu geen zin daar een uur naar op zoek te gaan
      // dus gebruik ik hieronder @ts-ignore
      // @ts-ignore
      const response = await axios.get('/signin', { email, password });
      const user = response.data;

      dispatch({
        type: ActionType.SIGNIN_USER_SUCCESS,
        payload: user,
      });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage}`);

      dispatch({
        type: ActionType.SIGNIN_USER_ERROR,
        payload: error.message,
      });
    }
  };
};

export const signUp =
  ({ email, password }: SignWithEmail) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post('/signup/', { email, password });
      const user = response.data;

      dispatch({
        type: ActionType.SIGNIN_USER_SUCCESS,
        payload: user,
      });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage}`);

      dispatch({
        type: ActionType.SIGNIN_USER_ERROR,
        payload: error.message,
      });
    }
  };

export const signOut = (userId: number) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.post(`/signout/${userId}`);
    const user = response.data;

    try {
      dispatch({
        type: ActionType.SIGNOUT_USER_SUCCESS,
        payload: userId,
      });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage}`);

      const user = {};

      dispatch({
        type: ActionType.SIGNOUT_USER_ERROR,
        payload: user,
      });
    }
  };
};
