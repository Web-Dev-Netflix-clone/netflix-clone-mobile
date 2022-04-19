import { IMovieDetailsTransform } from './../../types/data.types.d';
import { ActionType } from './../action-types/index';

export interface RequestMoviesSuccess {
  type: ActionType.REQUEST_MOVIES_SUCCESS;
  payload: IMovieDetailsTransform[];
}

export interface RequestMoviesFailure {
  type: ActionType.REQUEST_MOVIES_FAILURE;
  payload: string;
}

export interface SingleMovie {
  type: ActionType.SINGLE_MOVIE;
  payload: IMovieDetailsTransform;
}

export interface AllMovies {
  type: ActionType.ALL_MOVIES;
  payload: IMovieDetailsTransform[];
}

export interface UpdateSearchInput {
  type: ActionType.UPDATE_SEARCH_INPUT;
  payload: string;
}

export interface SetBottomSheetMovie {
  type: ActionType.SET_BOTTOMSHEET_MOVIE;
  payload: IMovieDetailsTransform;
}

export type TMoviesAction =
  | RequestMoviesSuccess
  | RequestMoviesFailure
  | SingleMovie
  | AllMovies
  | UpdateSearchInput
  | SetBottomSheetMovie;
