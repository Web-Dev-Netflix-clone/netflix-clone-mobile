import React from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { TYPOGRAPHY } from '../../global/styles/typography';

import SearchBar from './components/SearchBar';
import { useSelector } from 'react-redux';

import { GLOBAL } from '../../global/styles/global';
import {
  selectFilteredSearchMovies,
  selectSearchInput,
} from '../../state/selectors/selectors';
import DrawerTopBar from './components/DrawerTopBar';
import SearchMovieBox from './components/SearchMovieBox';

const SearchDrawer = () => {
  const searchMovies = useSelector(selectFilteredSearchMovies);
  const searchInput = useSelector(selectSearchInput);

  const searchMoviesMap = searchMovies.map((movie) => {
    return <SearchMovieBox key={Math.random().toString()} movie={movie} />;
  });

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
        {!!searchInput.length ? searchMoviesMap : null}
      </DrawerContentScrollView>
    </>
  );
};

export default SearchDrawer;
