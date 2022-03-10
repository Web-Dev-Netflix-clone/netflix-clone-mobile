import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

import { RootStackParams } from './navigation';
import { DrawerTabNavigator } from './Drawer';

const navTheme = DefaultTheme;
navTheme.colors.background = 'transparent';

export const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      {/* <RootNavigator /> */}
      <DrawerTabNavigator />
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
