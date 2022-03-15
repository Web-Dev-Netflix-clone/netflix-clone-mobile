import { combineReducers } from 'redux';
import { reducer as userReducer } from './userReducer';
import { reducer as appStateReducer } from './appStateReducer';

// Hier worden alle reducers aan elkaar verbonden in een object
// Dit is de representatie van je 'Redux Store' een duur woord
// voor een object met informatie over je hele app
// De RootState type refereert dus naar de structuur
const reducers = combineReducers({
  appState: appStateReducer,
  userData: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
