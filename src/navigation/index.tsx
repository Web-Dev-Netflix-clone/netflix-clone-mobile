import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { DrawerNav } from './DrawerNav/DrawerNav';
import { LoginStack } from './AuthStack/LoginStack';
import { useSelector } from '../hooks/useTypedSelector';
import BottomSheet from '../components/BottomSheet';

import StartupScreen from '../screens/StartUpScreen/StartupScreen';
import { useActions } from '../hooks/useActions';

const navTheme = DefaultTheme;
navTheme.colors.background = '#000';
export const Navigation = () => {
  const { fetchMovies } = useActions();

  const isSignedIn = useSelector((state) => state.userData.isLoggedIn);
  const movieDataLoaded = useSelector((state) => state.movies.allMovies.length);

  useEffect(() => {
    fetchMovies();
  }, [movieDataLoaded]);

  return (
    <NavigationContainer theme={navTheme}>
      {isSignedIn ? (
        <LoginStack />
      ) : movieDataLoaded ? (
        <DrawerNav />
      ) : (
        <StartupScreen />
      )}

      <BottomSheet />
    </NavigationContainer>
  );
};
