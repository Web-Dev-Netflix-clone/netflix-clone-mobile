import { ActionType } from '../action-types';
import { IMovie, TMoviesAction } from '../actionsInterfaces/moviesInterfaces';

export interface MoviesState {
  loading: boolean;
  error: string | null;
  allMovies: IMovie[] | [];
  singleMovie: IMovie;
  searchMovies: IMovie[] | [];
  searchInput: string;
}

const initialState = {
  loading: false,
  error: null,
  allMovies: [],
  singleMovie: {
    id: '',
    description: '',
    trailer: '',
    title: '',
    key: '',
    poster: '',
    backdrop: '',
    backdropHighRes: '',
    posterHighRes: '',
  },
  searchMovies: [],
  searchInput: '',
};

export const reducer = (
  state: MoviesState = initialState,
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

    case ActionType.SINGLE_MOVIE:
      return {
        ...state,
        singleMovie: action.payload,
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

    default:
      return state;
  }
};
