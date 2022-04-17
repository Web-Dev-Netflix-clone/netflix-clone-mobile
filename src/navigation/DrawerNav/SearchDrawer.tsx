import React from 'react';
import { Text } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';

import { TYPOGRAPHY } from '../../global/styles/typography';

import SearchBar from './CustomDrawerComponents/SearchBar';

import { useSelector } from 'react-redux';

import { GLOBAL } from '../../global/styles/global';
import DrawerTopBar from './CustomDrawerComponents/DrawerTopBar';
import SearchMovieBox from './CustomDrawerComponents/SearchMovieBox';
import {
  selectFilteredSearchMovies,
  selectSearchInput,
} from '../../state/selectors/selectors';

const SearchDrawer = () => {
  const searchMovies = useSelector(selectFilteredSearchMovies);
  const searchInput = useSelector(selectSearchInput);

  return (
    <>
      <DrawerTopBar title={'Search'} />

      <SearchBar />

      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: GLOBAL.SPACING.md,
          backgroundColor: TYPOGRAPHY.COLOR.Black,
        }}>
        <Text
          style={{
            ...TYPOGRAPHY.FONT.h2,
            marginBottom: GLOBAL.SPACING.md,
            marginLeft: GLOBAL.SPACING.sm,
          }}>
          Top Searches
        </Text>
        {!!searchInput.length &&
          searchMovies?.map(({ id, title, backdrop }) => {
            return <SearchMovieBox key={id} title={title} image={backdrop} />;
          })}
      </DrawerContentScrollView>
    </>
  );
};

export default SearchDrawer;
