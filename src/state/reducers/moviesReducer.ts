import { IMovieDetailsTransform } from '../../types/data.types';
import { ActionType } from '../action-types';
import { TMoviesAction } from '../actionsInterfaces/moviesInterfaces';
import { moviesInitialState } from './initialState/moviesInitialState';

export interface MoviesState {
  loading: boolean;
  error: string | null;
  allMovies: IMovieDetailsTransform[];
  heroMovie: IMovieDetailsTransform;
  searchMovies: IMovieDetailsTransform[];
  bottomSheetMovie: IMovieDetailsTransform;
  movieDetails: any;
  searchInput: string;
}

export const reducer = (
  state: MoviesState = moviesInitialState,
  action: TMoviesAction
): MoviesState => {
  switch (action.type) {
    case ActionType.REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.payload,
      };

    case ActionType.REQUEST_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case ActionType.SAVE_HERO_MOVIE:
      return {
        ...state,
        heroMovie: action.payload,
        bottomSheetMovie: action.payload,
      };

    case ActionType.ALL_MOVIES:
      return {
        ...state,
        searchMovies: action.payload,
      };

    case ActionType.UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };

    case ActionType.SET_BOTTOMSHEET_MOVIE:
      return {
        ...state,
        bottomSheetMovie: action.payload,
      };

    case ActionType.SAVE_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };

    default:
      return state;
  }
};
