import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
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

import DiscoverNav from '../components/DiscoverNav';
import { Dimensions } from 'react-native';
import CategoriesModal from '../components/CategoriesModal';
import { useSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
const windowHeight = Dimensions.get('window').height;

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerTabNavigator = () => {
  const [modalActive, setModalActive] = useState(false);
  const { searchActive } = useActions();

  const mainNavHiddenToggle = useSelector(
    (state) => state.appState.hideMainNav
  );
  const scrollZero = useSelector((state) => state.appState.scrollYZero);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName='Home'
      //@ts-ignore
      screenOptions={({ navigation }: { navigation: any }) => {
        return {
          headerShown: true,
          // headerLeft: false,

          header: () => {
            return (
              <View>
                {!mainNavHiddenToggle && (
                  <View
                    style={{
                      backgroundColor: scrollZero
                        ? 'transparent'
                        : 'rgba(0,0,0,0.65)',
                      flexDirection: 'row',
                      paddingTop: 56,
                      justifyContent: 'space-between',
                    }}>
                    <Pressable
                      style={{
                        marginLeft: GLOBAL.SPACING.sm,
                        marginTop: -GLOBAL.SPACING.sm,
                      }}
                      onPress={() => {}}>
                      <Image
                        source={require('../../assets/netflix-logos/netflix-logo-png-symbol-512x512.png')}
                        style={{ height: 30, width: 30 }}
                      />
                    </Pressable>
                    <View
                      style={[
                        GLOBAL.LAYOUT.rowCenter,
                        { width: '50%', justifyContent: 'space-around' },
                      ]}>
                      <Pressable
                        style={{
                          marginRight: GLOBAL.SPACING.sm,
                          marginTop: -GLOBAL.SPACING.sm,
                        }}
                        onPress={() =>
                          navigation.dispatch(DrawerActions.openDrawer())
                        }>
                        <Feather
                          name='cast'
                          size={26}
                          color={TYPOGRAPHY.COLOR.White}
                        />
                      </Pressable>
                      <Pressable
                        style={{
                          marginRight: GLOBAL.SPACING.sm,
                          marginTop: -GLOBAL.SPACING.sm,
                        }}
                        onPress={() => {
                          searchActive();

                          navigation.dispatch(DrawerActions.openDrawer());
                        }}>
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
                        onPress={() => {
                          navigation.dispatch(DrawerActions.openDrawer());
                        }}>
                        <Avatar
                          imageSource={require('../../assets/netflix-avatars/avatar-yellow.png')}
                          height={20}
                          width={20}
                        />
                      </Pressable>
                    </View>
                  </View>
                )}

                <DiscoverNav
                  setModalActive={setModalActive}
                  style={{
                    backgroundColor: mainNavHiddenToggle
                      ? 'rgba(0,0,0,0.65)'
                      : scrollZero
                      ? 'transparent'
                      : 'rgba(0,0,0,0.65)',
                    width: '100%',
                    height: mainNavHiddenToggle ? 90 : 50,
                    paddingTop: mainNavHiddenToggle ? 50 : 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}
                />
                {modalActive && (
                  <CategoriesModal
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                  />
                )}
              </View>
            );
          },

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
        };
      }}>
      <Drawer.Screen name='Home' component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
  },
});
