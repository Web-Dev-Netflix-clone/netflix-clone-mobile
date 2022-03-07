import { RootState } from '../reducers';

// Voorbeeld van een redux selector Rootstate refereert naar de structuur van alle reducers
// de state als geheel dus. In deze selector pakker we dan de userData reducer en dan
// de state van een specifieke user.
export const selectCurrentUser = (state: RootState) => {
  return state.userData.user;
};
