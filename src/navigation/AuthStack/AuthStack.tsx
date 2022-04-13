import React from 'react';
import { Pressable, Image, Text, View } from 'react-native';

import SignInScreen from '../../screens/SignInScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';

import netflixLogo from '../../assets/netflix-logos/netflix-logo-2560x1440.png';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { IMGSTYLES } from '../../global/styles/imgStyles';
import { AuthStackParams } from './../navigation';
import { GLOBAL } from '../../global/styles/global';
import SignUpScreen from '../../screens/SignUpScreen';
import HelpScreen from '../../screens/HelpScreen';
const AuthStack = createStackNavigator<AuthStackParams>();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator initialRouteName='Welcome'>
      <AuthStack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <Image
              style={[IMGSTYLES.headerLogo, { marginLeft: -15 }]}
              source={netflixLogo}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => {}}>
                <Text style={GLOBAL.TEXT.Default}>PRIVACY</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Signin');
                }}>
                <Text style={GLOBAL.TEXT.Default}>SIGN IN</Text>
              </Pressable>
              <Pressable onPress={() => {}}>
                <Ionicons name='ellipsis-vertical' size={20} color='gray' />
              </Pressable>
            </View>
          ),
        })}
      />
      <AuthStack.Screen
        name='Signup'
        component={SignUpScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: false,
          title: '',
          headerLeft: () => (
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}
              onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back' size={24} color='black' />
              <Image
                style={[IMGSTYLES.headerLogo, { marginLeft: -15 }]}
                source={netflixLogo}
              />
            </Pressable>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Help');
                }}>
                <Text style={GLOBAL.TEXT.DefaultBlack}>HELP</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Signin');
                }}>
                <Text style={GLOBAL.TEXT.DefaultBlack}>SIGN IN</Text>
              </Pressable>
            </View>
          ),
        })}
      />
      <AuthStack.Screen
        name='Help'
        component={HelpScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: () => (
            <Image style={IMGSTYLES.headerLogo} source={netflixLogo} />
          ),
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back' size={24} color='black' />
            </Pressable>
          ),
        })}
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
