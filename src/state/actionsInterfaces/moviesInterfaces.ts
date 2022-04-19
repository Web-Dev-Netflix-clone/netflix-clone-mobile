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

export interface SaveHeroMovie {
  type: ActionType.SAVE_HERO_MOVIE;
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

export interface SaveMovieDetails {
  type: ActionType.SAVE_MOVIE_DETAILS;
  payload: IMovieDetailsTransform;
}

export type TMoviesAction =
  | RequestMoviesSuccess
  | RequestMoviesFailure
  | SaveHeroMovie
  | AllMovies
  | UpdateSearchInput
  | SetBottomSheetMovie
  | SaveMovieDetails;
