import { ActionType } from '../action-types';
import { IMovie, TMoviesAction } from '../actionsInterfaces/moviesInterfaces';

export interface MoviesState {
  loading: boolean;
  error: string | null;
  allMovies: IMovie[] | [];
  singleMovie: IMovie;
}

const initialState = {
  loading: false,
  error: null,
  allMovies: [],
  singleMovie: { title: '', id: 0, poster: '', backdrop: '' },
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

    default:
      return state;
  }
};
