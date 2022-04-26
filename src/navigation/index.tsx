import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import BottomSheet from '../components/BottomSheet/index';
import { useSelector } from '../hooks/useTypedSelector';
import { DrawerNav } from './DrawerNav';
import { LoginStackNav } from './LoginStack';

import NotificationBox from '../components/NotificationBox';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useActions } from '../hooks/useActions';
import StartupScreen from '../screens/StartUpScreen';
import {
  selectMoviesLength,
  selectSignedInStatus,
} from '../state/selectors/selectors';
import { RootState } from '../state';

const navTheme = DefaultTheme;
navTheme.colors.background = TYPOGRAPHY.COLOR.Black;
export const Navigation = () => {
  const { showNotificationToggle } = useActions();
  const showNotifcation = useSelector(
    (state: RootState) => state.appState.showNotification
  );

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

      {showNotifcation && <NotificationBox />}
      <BottomSheet />
    </NavigationContainer>
  );
};
