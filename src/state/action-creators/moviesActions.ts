import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';

import axios from 'axios';
import { IMovieSet } from '../../screens/ComingSoonScreen';
import {
  IMovieDetails,
  IMovieDetailsTransform,
  IMoviesObject,
} from '../../types/data.types';
const API_URL = 'https://afternoon-oasis-79606.herokuapp.com/discover';
const API_GENRES =
  'https://afternoon-oasis-79606.herokuapp.com/discover/movies';

export const fetchMovieDetails = (movieId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      let request = await axios.get(`${API_URL}/movie?id=${movieId}`);

      const movieDetails = request.data;

      dispatch({
        type: ActionType.SAVE_MOVIE_DETAILS,
        payload: movieDetails,
      });
    } catch (error) {
      console.log(
        `error iside fetchMovieDetails thunk... ${error} 
         failed with movieId ${movieId}
      `
      );

      const workingMovieId = 580489;
      let request = await axios.get(`${API_URL}/movie?id=${workingMovieId}`);

      const movieDetails = request.data;

      dispatch({
        type: ActionType.SAVE_MOVIE_DETAILS,
        payload: movieDetails,
      });
    }
  };
};

const transformMoviesObject = (moviesObject: IMoviesObject) => {
  const movies: IMovieSet[] = [];

  Object.entries(moviesObject).forEach(
    ([key, value]: [key: string, value: IMoviesObject]) => {
      let filteredMovies = value?.categoryDetails.map(
        (movie: IMovieDetails) => {
          return {
            id: movie.id.toString(),
            title: movie.title,
            description: movie.overview,
            backdrop: movie.backdropUrls[0],
            backdropHighRes: movie.backdropUrls[1],
            poster: movie.posterUrls[0],
            posterHighRes: movie.posterUrls[1],
            trailer: movie.trailerUrl,
            rating: movie.rating,
            runtime: movie.runtime,
          };
        }
      );

      const laneTitleSplit = key.split('Movies')[0];
      const genre =
        laneTitleSplit.charAt(0).toUpperCase() + laneTitleSplit.slice(1);

      movies.push({ genre: genre, movies: filteredMovies });
    }
  );

  return movies;
};

export const fetchMovies = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const requestDiscover = await axios.get(`${API_URL}`);
      const requestGenre = await axios.get(`${API_GENRES}`);

      const discoverMovieData = requestDiscover.data;
      const genreMovieData = requestGenre.data;

      const discoverMovies = transformMoviesObject(discoverMovieData);
      const genreMovies = transformMoviesObject(genreMovieData);

      const allMovies = [...discoverMovies, ...genreMovies];

      dispatch({
        type: ActionType.REQUEST_MOVIES_SUCCESS,
        payload: allMovies,
      });

      const randomMovieSet =
        Math.floor(Math.random() * (allMovies.length - 1)) + 1;

      const movies = allMovies[randomMovieSet].movies;

      const selectRandomMovie = Math.floor(Math.random() * movies.length - 1);

      const heroMovie = movies[selectRandomMovie];

      dispatch({
        type: ActionType.SAVE_HERO_MOVIE,
        payload: heroMovie,
      });

      // reduces all array with movies to a single searchable array
      const allMoviesSearchable = allMovies
        .reduce((acc, curr) => {
          return acc.concat(curr.movies);
        }, [] as IMovieDetailsTransform[])

        // removes duplicate objects from the array
        .filter((element, index, array) => {
          return (
            array.findIndex((element2) => element2?.id === element?.id) ===
            index
          );
        });

      dispatch({
        type: ActionType.ALL_MOVIES,
        payload: allMoviesSearchable,
      });
    } catch (error) {
      console.log(`error iside fetchMovies thunk... ${error}`);
    }
  };
};

export const updateSearchInput = (searchText: string) => {
  return {
    type: ActionType.UPDATE_SEARCH_INPUT,
    payload: searchText,
  };
};

export const setBottomSheetMovie = (movieData: IMovieDetailsTransform) => {
  return {
    type: ActionType.SET_BOTTOMSHEET_MOVIE,
    payload: movieData,
  };
};
