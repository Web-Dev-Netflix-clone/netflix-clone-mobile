import React from 'react';
import { Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { TYPOGRAPHY } from '../global/styles/typography';

import { MovieDetailParams } from './navigation';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const MovieDetail = createStackNavigator<MovieDetailParams>();

export const MovieDetailsStack = () => {
  return (
    <MovieDetail.Navigator initialRouteName='MovieDetail2'>
      <MovieDetail.Screen
        name='MovieDetail2'
        component={MovieDetailsScreen}
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
            </Pressable>
          ),
        })}
      />
    </MovieDetail.Navigator>
  );
};
