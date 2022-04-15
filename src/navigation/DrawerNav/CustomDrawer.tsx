import React from 'react';
import { View } from 'react-native';

import { TYPOGRAPHY } from '../../global/styles/typography';
import { GLOBAL } from '../../global/styles/global';

import { useSelector } from 'react-redux';
import { RootState } from '../../state';

import SearchDrawer from './SearchDrawer';
import ProfileDrawer from './ProfileDrawer';

const CustomDrawer = () => {
  const searchActive = useSelector(
    (state: RootState) => state.appState.searchActive
  );

  return searchActive ? (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: GLOBAL.SPACING.xxxxl,
        zIndex: -1,
      }}>
      <SearchDrawer />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: GLOBAL.SPACING.xxxxl,
      }}>
      <ProfileDrawer />
    </View>
  );
};

export default CustomDrawer;
