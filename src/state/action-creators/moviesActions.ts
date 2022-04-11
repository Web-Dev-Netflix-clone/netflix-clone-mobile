import { IMovieSet } from './../../screens/HomeScreen';
import { ActionType } from '../action-types';
import { Action, Dispatch } from 'redux';
import uuid from 'react-native-uuid';
// import { categoriesData } from './../../../assets/MockData/categoriesData';

import axios from 'axios';
import { IMovie } from '../actionsInterfaces/moviesInterfaces';
const API_URL = 'https://afternoon-oasis-79606.herokuapp.com/discover';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const request = await axios.get(`${API_URL}`);

      const movieData = request.data;

      const allMovies: IMovieSet[] = [];

      Object.entries(movieData).forEach(([key, value]: any) => {
        let filteredMovies = value.categoryDetails.map((movie: any) => {
          return {
            id: uuid.v4(),
            title: movie.title,
            backdrop: movie.backdropUrls[0],
            backdropHighRes: movie.backdropUrls[1],
            poster: movie.posterUrls[0],
            posterHighRes: movie.posterUrls[1],
            trailer: movie.trailerUrl,
          };
        });

        allMovies.push({ genre: key, movies: filteredMovies });
      });

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

      const allMoviesSearchable = allMovies.reduce((acc, curr) => {
        return acc.concat(curr.movies);
      }, [] as IMovie[]);

      dispatch({
        type: ActionType.ALL_MOVIES,
        payload: allMoviesSearchable,
      });
    } catch (err) {
      console.log(err);
    }
  };
};