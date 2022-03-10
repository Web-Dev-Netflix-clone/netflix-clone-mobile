import { Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import netflixLogo from '../../assets/netflix-logos/netflix-logo-2560x1440.png';

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

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { IMGSTYLES } from '../global/styles/imgStyles';

// Dit is even de basis... we moeten nog even uitvogelen hoe we dit precies gaan doen.
// In ieder geval kloppen alle imports en types voorlopig ;-)

const isLoggedIn = true;

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/* <DrawerTabNavigator /> */}
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParams>();

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
      {/* temporary stack screen for signin modal - development */}
      <Stack.Screen
        name='Signin'
        component={SignInScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Black,
          },
          title: '',
          headerLeft: () => (
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => navigation.goBack()}>
              <Ionicons
                name='arrow-back'
                size={24}
                color={TYPOGRAPHY.COLOR.White}
              />
              <Image
                style={[IMGSTYLES.headerLogo, { marginLeft: -15 }]}
                source={netflixLogo}
              />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerTabNavigator = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen name='Home' component={BottomTabNavigator} />
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
      <BottomTab.Screen name='Games' component={HomeScreen} />
      <BottomTab.Screen name='ComingSoon' component={HomeScreen} />
      <BottomTab.Screen name='Downloads' component={HomeScreen} />
    </BottomTab.Navigator>
  );
};
