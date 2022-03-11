import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { BottomTabNavigator } from './BottomTab';
import { DrawerStackParams } from './navigation';
import { Ionicons } from '@expo/vector-icons';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { Pressable } from 'react-native';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerTabNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName='Home'
      //@ts-ignore
      screenOptions={({ navigation }: { navigation: any }) => ({
        headerShown: true,
        headerLeft: false,

        headerRight: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Ionicons
              name='menu-outline'
              size={26}
              color={TYPOGRAPHY.COLOR.White}
              style={{ marginRight: GLOBAL.SPACING.md }}
            />
          </Pressable>
        ),
        title: '',
        headerTransparent: true,
        drawerPosition: 'right',
        drawerStyle: { right: 0 },
        drawerIcon: () => (
          <Ionicons
            name='md-home-outline'
            size={26}
            color={TYPOGRAPHY.COLOR.Black}
          />
        ),
      })}>
      <Drawer.Screen name='Home' component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};
