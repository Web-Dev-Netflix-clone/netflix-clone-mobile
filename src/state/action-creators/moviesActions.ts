import { ActionType } from '../action-types';
import { Action, Dispatch } from 'redux';
import axios from 'axios';
const API_URL = 'https://afternoon-oasis-79606.herokuapp.com/discover';
const MOVIE_DB_URL = 'https://image.tmdb.org/t/p/original';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const request = await axios.get(`${API_URL}`);

      const allMoviesExcluding = request.data
        .filter((x: any, i: number) => (i ? true : false))
        .map((movieSet: any) => {
          return movieSet.results
            .map((movie: any) => {
              return {
                id: movie.id,
                title: movie.title,
                backdrop: `${MOVIE_DB_URL}${movie.backdrop_path}`,
                poster: `${MOVIE_DB_URL}${movie.poster_path}`,
              };
            })
            .filter((x: any) => x);
        });

      dispatch({
        type: ActionType.REQUEST_MOVIES_SUCCESS,
        payload: allMoviesExcluding,
      });

      const randomMovieSet =
        Math.floor(Math.random() * (allMoviesExcluding.length - 1)) + 1;

      const movies = allMoviesExcluding[randomMovieSet];

      const selectRandomMovie = Math.floor(Math.random() * movies.length - 1);

      const singleMovie = movies[selectRandomMovie];

      dispatch({
        type: ActionType.SINGLE_MOVIE,
        payload: singleMovie,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
