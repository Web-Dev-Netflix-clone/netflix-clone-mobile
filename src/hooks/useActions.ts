import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appStateActionCreators, userActionCreators } from '../state';

const actionCreators: any = {
  ...userActionCreators,
  ...appStateActionCreators,
};

// custom hook to neaten up the look of dispatching an action with Redux
// binds the dispatch function to the action creator

export const useActions = () => {
  console.log('useActions', actionCreators);
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
