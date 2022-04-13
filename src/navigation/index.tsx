import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { DrawerNav } from './DrawerNav/DrawerNav';
import { LoginStack } from './AuthStack/LoginStack';
import { useSelector } from '../hooks/useTypedSelector';
import BottomSheet from '../components/BottomSheet';

const navTheme = DefaultTheme;
navTheme.colors.background = '#000';
export const Navigation = () => {
  const isSignedIn = useSelector((state) => state.userData.isLoggedIn);

  return (
    <NavigationContainer theme={navTheme}>
      {isSignedIn ? <LoginStack /> : <DrawerNav />}

      <BottomSheet />
    </NavigationContainer>
  );
};
