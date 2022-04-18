import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { DrawerNav } from './DrawerNav';
import { LoginStackNav } from './LoginStack';
import { useSelector } from '../hooks/useTypedSelector';
import BottomSheet from '../components/BottomSheet/index';

import StartupScreen from '../screens/StartUpScreen';
import { useActions } from '../hooks/useActions';
import { TYPOGRAPHY } from '../global/styles/typography';
import {
  selectMoviesLength,
  selectSignedInStatus,
} from '../state/selectors/selectors';

const navTheme = DefaultTheme;
navTheme.colors.background = TYPOGRAPHY.COLOR.Black;
export const Navigation = () => {
  const { fetchMovies } = useActions();

  const isSignedIn = useSelector(selectSignedInStatus);
  const movieDataLoaded = useSelector(selectMoviesLength);

  useEffect(() => {
    fetchMovies();
  }, [movieDataLoaded]);

  return (
    <NavigationContainer theme={navTheme}>
      {!isSignedIn ? (
        <LoginStackNav />
      ) : movieDataLoaded ? (
        <DrawerNav />
      ) : (
        <StartupScreen />
      )}

      <BottomSheet />
    </NavigationContainer>
  );
};
