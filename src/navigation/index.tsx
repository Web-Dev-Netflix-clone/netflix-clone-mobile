import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';

import {
  BottomTabParams,
  DrawerStackParams,
  RootStackParams,
} from './navigation';

// Dit is even de basis... we moeten nog even uitvogelen hoe we dit precies gaan doen.
// In ieder geval kloppen alle imports en types voorlopig ;-)

const navTheme = DefaultTheme;
navTheme.colors.background = 'transparent';

export const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Signin'>
      <Stack.Screen name='Signin' component={SignInScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      {/* temporary stack screen for signin modal - development */}
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerTabNavigator = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const AuthStack = createStackNavigator();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Welcome' component={WelcomeScreen} />
      <AuthStack.Screen name='SignIn' component={SignInScreen} />
    </AuthStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name='Home' component={HomeScreen} />
    </BottomTab.Navigator>
  );
};
