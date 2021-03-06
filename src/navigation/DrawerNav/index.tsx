import { Feather, Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { BottomNav } from '../BottomTabNav';
import { DrawerTabParams } from '../navigation';
import Avatar from './components/Avatar';
import CustomDrawer from './CustomDrawer';

import Animated, {
  Easing,
  FadeInDown,
  FadeInUp,
  FadeOutUp,
  interpolateColor,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import DiscoverNav from './components/DiscoverNav';

import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useTypedSelector';
import CategoriesModal from '../../screens/HomeScreen/components/CategoriesModal';

import MovieDetailsScreen from '../../screens/MovieDetailsScreen';
import {
  selectCurrentRoute,
  selectDiscoverNavVisibility,
  selectMainNavVisibility,
  selectScrollYZero,
} from '../../state/selectors/selectors';

const Drawer = createDrawerNavigator<DrawerTabParams>();

export const DrawerNav = () => {
  const [modalActive, setModalActive] = useState(false);
  const scrollZero = useSelector(selectScrollYZero);
  const showDiscoverNav = useSelector(selectDiscoverNavVisibility);
  const currentRoute = useSelector(selectCurrentRoute);
  const mainNavHiddenToggle = useSelector(selectMainNavVisibility);

  const { searchActive } = useActions();

  const progress = useSharedValue(0);

  const animatedBgColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']
    );

    return {
      backgroundColor,
    };
  });

  useEffect(() => {
    if (scrollZero) {
      progress.value = withTiming(0, {
        duration: 50,
        easing: Easing.exp,
      });
    }

    if (!scrollZero) {
      progress.value = withTiming(1, {
        duration: 50,
        easing: Easing.exp,
      });
    }
  }, [scrollZero]);

  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawer />}
      initialRouteName='Home'
      screenOptions={({ navigation }) => {
        return {
          headerShown: true,

          header: ({}) => {
            return (
              <View>
                {!mainNavHiddenToggle && (
                  <Animated.View
                    entering={FadeInDown.delay(0)}
                    layout={Layout.easing(Easing.ease).delay(0)}
                    exiting={FadeOutUp.delay(0)}
                    style={[
                      stylesheet.animatedHeader,
                      scrollZero && animatedBgColor,
                    ]}>
                    {currentRoute === 'Home2' ? (
                      <Pressable
                        style={{
                          marginLeft: GLOBAL.SPACING.sm,
                          marginTop: -GLOBAL.SPACING.sm,
                        }}
                        onPress={() => {}}>
                        <Image
                          source={require('../../../assets/netflix-logos/netflix-logo-png-symbol-512x512.png')}
                          style={{ height: 35, width: 35 }}
                        />
                      </Pressable>
                    ) : (
                      <Text
                        style={{
                          ...TYPOGRAPHY.FONT.body,
                          fontSize: 17,
                          marginLeft: 15,
                        }}>
                        {currentRoute.split(/(?=[A-Z])/).join(' ')}
                      </Text>
                    )}
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
                        {currentRoute === 'Home2' && (
                          <Feather
                            name='cast'
                            size={26}
                            color={TYPOGRAPHY.COLOR.White}
                          />
                        )}
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
                          imageSource={require('../../../assets/netflix-avatars/avatar-yellow.png')}
                          height={26}
                          width={26}
                        />
                      </Pressable>
                    </View>
                  </Animated.View>
                )}

                {showDiscoverNav && (
                  <Animated.View
                    entering={FadeInUp.delay(0)}
                    layout={Layout.easing(Easing.ease).delay(0)}
                    exiting={FadeOutUp.delay(0)}
                    style={animatedBgColor}>
                    <DiscoverNav
                      setModalActive={setModalActive}
                      style={{
                        width: '100%',
                        height: mainNavHiddenToggle ? 110 : 50,
                        paddingTop: mainNavHiddenToggle ? 70 : 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                      }}
                    />
                  </Animated.View>
                )}

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
      <Drawer.Screen name='Home' component={BottomNav} />
      <Drawer.Screen
        name='MovieDetail'
        component={MovieDetailsScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const stylesheet = StyleSheet.create({
  animatedHeader: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'row',
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
});
