import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import SignInScreen from '../../screens/SignInScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import netflixLogo from '../../../assets/netflix-logos/netflix-logo-2560x1440.png';
import { GLOBAL } from '../../global/styles/global';
import { IMGSTYLES } from '../../global/styles/imgStyles';
import { TYPOGRAPHY } from '../../global/styles/typography';
import HelpScreen from '../../screens/HelpScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import { LoginStackParams } from '../navigation';
const LoginStack = createStackNavigator<LoginStackParams>();

export const LoginStackNav = () => {
  return (
    <LoginStack.Navigator initialRouteName='Welcome'>
      <LoginStack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: true,
          title: '',
          headerLeft: () => (
            <Image
              style={{ ...IMGSTYLES.headerLogo, marginLeft: -15 }}
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
                <Text
                  style={{
                    ...GLOBAL.TEXT.Default,
                    fontSize: TYPOGRAPHY.FONT_SIZES.md,
                  }}>
                  PRIVACY
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Signin');
                }}>
                <Text
                  style={{
                    ...GLOBAL.TEXT.Default,
                    fontSize: TYPOGRAPHY.FONT_SIZES.md,
                  }}>
                  SIGN IN
                </Text>
              </Pressable>
              <Pressable onPress={() => {}}>
                <Ionicons name='ellipsis-vertical' size={26} color='gray' />
              </Pressable>
            </View>
          ),
        })}
      />
      <LoginStack.Screen
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
              <Ionicons name='arrow-back' size={28} color='black' />
              <Image
                style={{ ...IMGSTYLES.headerLogo, marginLeft: -15 }}
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
      <LoginStack.Screen
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
              <Ionicons name='arrow-back' size={28} color='black' />
            </Pressable>
          ),
        })}
      />
      <LoginStack.Screen
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
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 20,
              }}
              onPress={() => navigation.goBack()}>
              <Ionicons
                name='arrow-back'
                size={28}
                color={TYPOGRAPHY.COLOR.White}
                style={{ marginLeft: 15 }}
              />
              <Image
                style={{ ...IMGSTYLES.headerLogo, marginLeft: -15 }}
                source={netflixLogo}
              />
            </Pressable>
          ),
        })}
      />
    </LoginStack.Navigator>
  );
};
