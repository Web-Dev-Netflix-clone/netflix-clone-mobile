import { combineReducers } from 'redux';
import { reducer as userReducer } from './userReducer';
import { reducer as appStateReducer } from './appStateReducer';

const reducers = combineReducers({
  appState: appStateReducer,
  userData: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
