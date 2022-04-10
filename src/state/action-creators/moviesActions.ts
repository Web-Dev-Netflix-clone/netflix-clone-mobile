import { categoriesData } from './../../../assets/MockData/categoriesData';
import { ActionType } from '../action-types';
import { Action, Dispatch } from 'redux';
import uuid from 'react-native-uuid';

import axios from 'axios';
const API_URL = 'https://afternoon-oasis-79606.herokuapp.com/discover';
const MOVIE_DB_URL = 'https://image.tmdb.org/t/p/w500';
const MOVIE_DB_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';
const random = '/cTZ45PUZeuyToutVtkXIyQaDU6D.jpg';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const request = await axios.get(`${API_URL}`);

      const movieData = request.data;

      const allMovies = [];

      for (const [key, value] of Object.entries(movieData)) {
        //@ts-ignore
        let filteredMovies = value.categoryDetails.map((movie) => {
          return {
            id: uuid.v4(),
            title: 'temp title',
            description: movie.overview,
            backdrop: movie.backdropUrls[0],
            backdropHighRes: movie.backdropUrls[1],
            poster: movie.posterUrls[0],
            posterHighRes: movie.posterUrls[1],
            trailer: movie.trailerUrl,
          };
        });

        allMovies.push({ genre: key, movies: filteredMovies });
      }

      dispatch({
        type: ActionType.REQUEST_MOVIES_SUCCESS,
        payload: allMovies,
      });

      const randomMovieSet =
        Math.floor(Math.random() * (allMovies.length - 1)) + 1;

      const movies = allMovies[randomMovieSet].movies;

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
