import { RootState } from '../reducers';

export const selectCurrentUser = (state: RootState) => {
  return state.userData.user;
};
