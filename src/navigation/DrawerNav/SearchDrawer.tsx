import React from 'react';
import { Text } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';

import { TYPOGRAPHY } from '../../global/styles/typography';

import SearchBar from './CustomDrawerComponents/SearchBar';

import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import { GLOBAL } from '../../global/styles/global';
import DrawerTopBar from './CustomDrawerComponents/DrawerTopBar';
import SearchMovieBox from './CustomDrawerComponents/SearchMovieBox';

const SearchDrawer = () => {
  const { searchMovies, searchInput } = useSelector(
    (state: RootState) => state.movies
  );

  const filteredArray = searchMovies
    ?.map((result) => {
      return { ...result, title: result.title.toLowerCase() };
    })
    .filter((result) => result.title.includes(searchInput.toLowerCase()));

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
          filteredArray?.map(({ id, title, backdrop }) => {
            return <SearchMovieBox key={id} title={title} image={backdrop} />;
          })}
      </DrawerContentScrollView>
    </>
  );
};

export default SearchDrawer;
