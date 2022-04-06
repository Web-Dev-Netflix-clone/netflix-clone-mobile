import { ActionType } from './../action-types/index';

export interface IMovie {
  id: number | string;
  title: string;
  backdrop: string;
  poster: string;
}

export interface RequestMoviesSuccess {
  type: ActionType.REQUEST_MOVIES_SUCCESS;
  payload: IMovie[];
}

export interface RequestMoviesFailure {
  type: ActionType.REQUEST_MOVIES_FAILURE;
  payload: string;
}

export interface SingleMovie {
  type: ActionType.SINGLE_MOVIE;
  payload: IMovie;
}

export type TMoviesAction =
  | RequestMoviesSuccess
  | RequestMoviesFailure
  | SingleMovie;
