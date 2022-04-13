import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { DrawerNav } from './DrawerNav/DrawerNav';
import { LoginStack } from './AuthStack/AuthStack';
import { useSelector } from '../hooks/useTypedSelector';
import BottomSheet from '../components/BottomSheet';

export const Navigation = () => {
  const isSignedIn = useSelector((state) => state.userData.isLoggedIn);

  return (
    <NavigationContainer>
      {isSignedIn ? <LoginStack /> : <DrawerNav />}

      <BottomSheet />
    </NavigationContainer>
  );
};
