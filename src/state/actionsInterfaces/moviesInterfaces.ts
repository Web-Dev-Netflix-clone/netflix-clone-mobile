import { ActionType } from './../action-types/index';

export interface IMovie {
  id: string;
  title: string;
  description: string;
  backdrop: string;
  backdropHighRes: string;
  poster: string;
  posterHighRes: string;
  trailer: string;
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

export interface AllMovies {
  type: ActionType.ALL_MOVIES;
  payload: IMovie[];
}

export interface UpdateSearchInput {
  type: ActionType.UPDATE_SEARCH_INPUT;
  payload: string;
}

export type TMoviesAction =
  | RequestMoviesSuccess
  | RequestMoviesFailure
  | SingleMovie
  | AllMovies
  | UpdateSearchInput;
