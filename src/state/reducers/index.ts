import { combineReducers } from 'redux';
import { reducer as appStateReducer } from './appStateReducer';
import { reducer as moviesReducer } from './moviesReducer';
import { reducer as userReducer } from './userReducer';

const reducers = combineReducers({
  appState: appStateReducer,
  userData: userReducer,
  movies: moviesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
