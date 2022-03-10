import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

import { RootStackParams } from './navigation';
import { DrawerTabNavigator } from './Drawer';
import { LoginStack } from './AuthStack';

const navTheme = DefaultTheme;
navTheme.colors.background = 'transparent';

// Temporary variable for mimicking SignIn logic
const isSignedIn = true;

export const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      {!isSignedIn ? <LoginStack /> : <DrawerTabNavigator />}
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParams>();

// For Dev purposes
export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerTransparent: true,
        })}
      />
    </Stack.Navigator>
  );
};
