import React from 'react';
import { View } from 'react-native';

import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';

import { useSelector } from 'react-redux';
import { RootState } from '../../state';

import MyListDrawer from './MyListDrawer';
import ProfileDrawer from './ProfileDrawer';
import SearchDrawer from './SearchDrawer';

const CustomDrawer = () => {
  const searchActive = useSelector(
    (state: RootState) => state.appState.searchActive
  );
  const myListActive = useSelector(
    (state: RootState) => state.appState.myListActive
  );

  return searchActive ? (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: '7%',
        paddingHorizontal: GLOBAL.SPACING.md,
        zIndex: -1,
      }}>
      <SearchDrawer />
    </View>
  ) : myListActive ? (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: '7%',
        paddingHorizontal: GLOBAL.SPACING.md,
      }}>
      <MyListDrawer />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: '7%',
        paddingHorizontal: GLOBAL.SPACING.md,
      }}>
      <ProfileDrawer />
    </View>
  );
};

export default CustomDrawer;
