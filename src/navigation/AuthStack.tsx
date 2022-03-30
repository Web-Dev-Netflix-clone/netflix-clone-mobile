import React from 'react';
import { Pressable, Image, Text, View } from 'react-native';

import SignInScreen from '../screens/SignInScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import netflixLogo from '../../assets/netflix-logos/netflix-logo-2560x1440.png';

import netflixTinyLogo from '../../assets/netflix-logos/netflix-icon-logo-small.png';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { TYPOGRAPHY } from '../global/styles/typography';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { AuthStackParams } from './navigation';
import { GLOBAL } from '../global/styles/global';
const AuthStack = createStackNavigator<AuthStackParams>();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator initialRouteName='Welcome'>
      <AuthStack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={({ navigation, route }) => {
          // console.log('ROUTE IS: => ', route);

          return {
            headerShown: true,
            headerTransparent: true,
            title: '',
            headerLeft: () => (
              <Image
                style={[IMGSTYLES.tinyLogo, { marginLeft: 15 }]}
                source={netflixTinyLogo}
              />
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: '65%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Pressable onPress={() => alert('Privacy Pressed!')}>
                  <Text style={GLOBAL.TEXT.Default}>PRIVACY</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Signin', { tinyLogo: true });
                  }}>
                  <Text style={GLOBAL.TEXT.Default}>SIGN IN</Text>
                </Pressable>
                <Pressable onPress={() => alert('Ellipsis Pressed!')}>
                  <Ionicons name='ellipsis-vertical' size={20} color='gray' />
                </Pressable>
              </View>
            ),
          };
        }}
      />
      <AuthStack.Screen
        name='Signin'
        component={SignInScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: true,
          title: '',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Black,
          },
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
