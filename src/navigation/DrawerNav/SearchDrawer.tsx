import React, { useEffect } from 'react';
import { View } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';

import { TYPOGRAPHY } from '../../global/styles/typography';

import CustomDrawerTopBar from './CustomDrawerComponents/TopBar';

import SearchBar from '../../components/SearchBar';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';

const SearchDrawer = () => {
  const searchMovies = useSelector(
    (state: RootState) => state.movies.allMoviesSearchable
  );

  useEffect(() => {
    console.log('SEARCHDRAWER', searchMovies);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
      }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          backgroundColor: TYPOGRAPHY.COLOR.Black,
        }}>
        <CustomDrawerTopBar title={'Search'} />
        <SearchBar />
      </DrawerContentScrollView>
    </View>
  );
};

export default SearchDrawer;
