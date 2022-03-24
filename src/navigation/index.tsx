import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import { RootStackParams } from './navigation';
import { DrawerTabNavigator } from './Drawer';
import { LoginStack } from './AuthStack';
import { useSelector } from '../hooks/useTypedSelector';
import BottomSheet from '../components/BottomSheet';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const navTheme = DefaultTheme;
navTheme.colors.background = 'transparent';
export const Navigation = () => {
  const isSignedIn = useSelector((state) => state.userData.isLoggedIn);

  return (
    <NavigationContainer theme={navTheme}>
      {isSignedIn ? <LoginStack /> : <DrawerTabNavigator />}
      <BottomSheet />
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParams>();

// For Dev purposes
export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='MovieDetail'>
      <Stack.Screen
        name='MovieDetail'
        component={MovieDetailsScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#000' },
          headerShown: true,
          title: '',
          headerTransparent: true,
        })}
      />
    </Stack.Navigator>
  );
};
