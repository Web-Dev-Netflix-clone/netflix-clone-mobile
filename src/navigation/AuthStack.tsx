import React from 'react';
import { Pressable, Image } from 'react-native';

import SignInScreen from '../screens/SignInScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import netflixLogo from '../../assets/netflix-logos/netflix-logo-2560x1440.png';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { TYPOGRAPHY } from '../global/styles/typography';
import { IMGSTYLES } from '../global/styles/imgStyles';
const AuthStack = createStackNavigator();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator initialRouteName='Signin'>
      <AuthStack.Screen name='Welcome' component={WelcomeScreen} />
      <AuthStack.Screen
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
    </AuthStack.Navigator>
  );
};
