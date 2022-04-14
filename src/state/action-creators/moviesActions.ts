import { ActionType } from '../action-types';
import { Action, Dispatch } from 'redux';
import uuid from 'react-native-uuid';

import axios from 'axios';
import { IMovie } from '../actionsInterfaces/moviesInterfaces';
const API_URL = 'https://afternoon-oasis-79606.herokuapp.com/discover';
const API_GENRES =
  'https://afternoon-oasis-79606.herokuapp.com/discover/movies';

const transformMoviesObject = (moviesObject: any) => {
  const movies: any[] = [];

  Object.entries(moviesObject).forEach(([key, value]: any) => {
    let filteredMovies = value.categoryDetails.map((movie: any) => {
      return {
        id: uuid.v4(),
        title: movie.title,
        description: movie.overview,
        backdrop: movie.backdropUrls[0],
        backdropHighRes: movie.backdropUrls[1],
        poster: movie.posterUrls[0],
        posterHighRes: movie.posterUrls[1],
        trailer: movie.trailerUrl,
      };
    });

    const laneTitleSplit = key.split('Movies')[0];
    const genre =
      laneTitleSplit.charAt(0).toUpperCase() + laneTitleSplit.slice(1);

    movies.push({ genre: genre, movies: filteredMovies });
  });

  return movies;
};

export const fetchMovies = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const request = await axios.get(`${API_URL}`);

      const movieData = request.data;

      const allMovies = transformMoviesObject(movieData);

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

export const updateSearchInput = (searchText: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_SEARCH_INPUT,
      payload: searchText,
    });
  };
};
