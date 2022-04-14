import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TYPOGRAPHY } from '../../global/styles/typography';
import ComingSoonScreen from '../../screens/ComingSoonScreen/ComingSoonScreen';
import DownloadsScreen from '../../screens/DownloadsScreen/DownloadsScreen';
import GamesScreen from '../../screens/GamesScreen/GamesScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import { BottomTabParams } from '../navigation';
import { Ionicons } from '@expo/vector-icons';
import { useActions } from '../../hooks/useActions';

const BottomTab = createBottomTabNavigator<BottomTabParams>();

export const BottomNav = () => {
  const { showMainNav, hideDiscoverNav, showDiscoverNav, changeCurrentRoute } =
    useActions();

  return (
    <BottomTab.Navigator
      screenOptions={({ navigation, route }) => {
        useEffect(() => {
          // enforces showing the main nav when the screen changes
          navigation.addListener('focus', () => {
            showMainNav();

            changeCurrentRoute(route.name);

            if (route.name !== 'Home2') hideDiscoverNav();

            if (route.name === 'Home2') showDiscoverNav();
          });

          return navigation;
        }, [navigation]);

        return {
          headerShown: true,
          tabBarStyle: {
            display: 'flex',
            backgroundColor: TYPOGRAPHY.COLOR.BlackSecondary,
            borderTopColor: 'transparent',
          },
          title: '',
          tabBarActiveTintColor: TYPOGRAPHY.COLOR.RedPrimary,
          tabBarInactiveTintColor: TYPOGRAPHY.COLOR.Black,
          tabBarShowLabel: true,
          tabBarLabelStyle: { paddingBottom: 0, color: TYPOGRAPHY.COLOR.White },
          headerTransparent: true,
        };
      }}>
      <BottomTab.Screen
        name='Home2'
        component={HomeScreen}
        options={({}) => ({
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons
              name='md-home-outline'
              size={26}
              color={TYPOGRAPHY.COLOR.White}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name='Games'
        component={GamesScreen}
        options={({}) => ({
          tabBarLabel: 'Games',
          tabBarIcon: () => (
            <Ionicons
              name='game-controller-outline'
              size={26}
              color={TYPOGRAPHY.COLOR.White}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name='ComingSoon'
        component={ComingSoonScreen}
        options={({}) => ({
          tabBarLabel: 'Coming Soon',
          tabBarIcon: () => (
            <Ionicons
              name='play-circle-outline'
              size={26}
              color={TYPOGRAPHY.COLOR.White}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name='Downloads'
        component={DownloadsScreen}
        options={({}) => ({
          tabBarLabel: 'Downloads',
          tabBarIcon: () => (
            <Ionicons
              name='arrow-down-circle-outline'
              size={26}
              color={TYPOGRAPHY.COLOR.White}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};