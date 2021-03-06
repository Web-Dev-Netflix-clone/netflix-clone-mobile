import { randomIntFromRange } from '../../utils/utils';
import { RootState } from '../reducers';
import uuid from 'react-native-uuid';

export const selectCurrentUser = (state: RootState) => {
  return state.userData.user;
};

export const selectFilteredSearchMovies = (state: RootState) =>
  state.movies.searchMovies
    .map((result) => {
      return {
        ...result,
        title: result.title.toLowerCase(),
        id: uuid.v4().toString(),
      };
    })
    .filter((result) =>
      result.title.includes(state.movies.searchInput.toLowerCase())
    );

export const selectComingSoonMovies = (state: RootState) => {
  const comingSoon = new Array(10).fill('x').map(() => {
    return {
      ...state.movies.searchMovies[
        randomIntFromRange(1, state.movies.searchMovies.length - 1)
      ],
      comingSoonId: uuid.v4(),
    };
  });

  return comingSoon;
};

export const selectMyListMovies = (state: RootState) => {
  const renderList = state.appState.myList.map((movieId: string) => {
    return state.movies.searchMovies.find((movie) => movie.id === movieId);
  });

  return renderList;
};

export const selectBottomSheetMovie = (state: RootState) =>
  state.movies.bottomSheetMovie;

export const selectAllMovies = (state: RootState) => state.movies.allMovies;

export const selectHeroMovie = (state: RootState) => state.movies.heroMovie;

export const selectMovieDetails = (state: RootState) =>
  state.movies.movieDetails.movieDetailsResults;

export const selectSearchInput = (state: RootState) => state.movies.searchInput;

export const selectSignedInStatus = (state: RootState) =>
  state.userData.isLoggedIn;

export const selectMoviesLength = (state: RootState) =>
  state.movies?.allMovies.length;

export const selectBottomSheetVisibility = (state: RootState) =>
  state.appState.showBottomSheet;

export const selectDiscoverNavVisibility = (state: RootState) =>
  state.appState.showDiscoverNav;

export const selectMainNavVisibility = (state: RootState) =>
  state.appState.hideMainNav;

export const selectScrollYZero = (state: RootState) =>
  state.appState.scrollYZero;

export const selectCurrentRoute = (state: RootState) =>
  state.appState.currentRoute;
