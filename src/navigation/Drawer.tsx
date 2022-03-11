import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { BottomTabNavigator } from './BottomTab';
import { DrawerStackParams } from './navigation';
import { Ionicons, Feather } from '@expo/vector-icons';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { Image, Pressable, View } from 'react-native';
import CustomDrawer from './CustomDrawer';
import Avatar from '../components/Avatar';

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerTabNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName='Home'
      //@ts-ignore
      screenOptions={({ navigation }: { navigation: any }) => ({
        headerShown: true,
        // headerLeft: false,

        headerLeft: () => (
          <Pressable
            style={{
              marginLeft: GLOBAL.SPACING.sm,
              marginTop: -GLOBAL.SPACING.sm,
            }}
            onPress={() => console.log('press')}>
            <Image
              source={require('../../assets/netflix-logos/netflix-logo-png-symbol-512x512.png')}
              style={{ height: 30, width: 30 }}
            />
          </Pressable>
        ),
        headerRight: () => (
          <View
            style={[
              GLOBAL.LAYOUT.rowCenter,
              { width: '40%', justifyContent: 'space-between' },
            ]}>
            <Pressable
              style={{
                marginRight: GLOBAL.SPACING.sm,
                marginTop: -GLOBAL.SPACING.sm,
              }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Feather name='cast' size={26} color={TYPOGRAPHY.COLOR.White} />
            </Pressable>
            <Pressable
              style={{
                marginRight: GLOBAL.SPACING.sm,
                marginTop: -GLOBAL.SPACING.sm,
              }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons
                name='search'
                size={26}
                color={TYPOGRAPHY.COLOR.White}
              />
            </Pressable>
            <Pressable
              style={{
                marginRight: GLOBAL.SPACING.sm,
                marginTop: -GLOBAL.SPACING.sm,
              }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Avatar
                imageSource={require('../../assets/netflix-avatars/avatar-yellow.png')}
                height={20}
                width={20}
              />
            </Pressable>
          </View>
        ),
        title: '',
        headerTransparent: true,
        drawerPosition: 'right',
        drawerStyle: { right: 0, width: '100%' },
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
