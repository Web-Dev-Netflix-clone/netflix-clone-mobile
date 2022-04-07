import { ActionType } from '../action-types';
import { Action, Dispatch } from 'redux';
import uuid from 'react-native-uuid';

import axios from 'axios';
const API_URL = 'https://afternoon-oasis-79606.herokuapp.com/discover';
const MOVIE_DB_URL = 'https://image.tmdb.org/t/p/original';
const random = '/cTZ45PUZeuyToutVtkXIyQaDU6D.jpg';

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
                id: uuid.v4().toString(),
                title: movie.title,
                backdrop: movie.backdrop_path
                  ? `${MOVIE_DB_URL}${movie.backdrop_path}`
                  : `${MOVIE_DB_URL}${random}`,
                poster: movie.poster_path
                  ? `${MOVIE_DB_URL}${movie.poster_path}`
                  : `${MOVIE_DB_URL}${random}`,
              };
            })
            .filter((x: any) => x);
        });

      if (allMoviesExcluding) {
        dispatch({
          type: ActionType.REQUEST_MOVIES_SUCCESS,
          payload: allMoviesExcluding,
        });
      }

      const randomMovieSetIndex =
        Math.floor(Math.random() * (allMoviesExcluding.length - 1)) + 1;

      const randomMovieSet = allMoviesExcluding[randomMovieSetIndex];

      const selectRandomMovieIndex = Math.floor(
        Math.random() * randomMovieSet.length - 1
      );

      const singleMovie = randomMovieSet[selectRandomMovieIndex];

      if (singleMovie) {
        dispatch({
          type: ActionType.SINGLE_MOVIE,
          payload: singleMovie,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// console.log('inside the effect');
// const requestMovies = async () => {
//   try {
//     const response = await axios.get(
//       'https://afternoon-oasis-79606.herokuapp.com/discover'
//     );

//     const data = response.data;

//     const allMovies = data.reduce((acc: any, curr: any, index: number) => {
//       if (index) return acc.concat(curr.results);

//       return acc;
//     }, []);

//     // console.log('ALL', allMovies);
//   } catch (error) {
//     console.log(error);
//   }
// };
// requestMovies();
