import React from 'react';
import { View, Text } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';

import { TYPOGRAPHY } from '../../global/styles/typography';

import SearchBar from './CustomDrawerComponents/SearchBar';

import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import { GLOBAL } from '../../global/styles/global';
import TopBar from './CustomDrawerComponents/DrawerTopBar';
import SearchMovieBox from './CustomDrawerComponents/SearchMovieBox';

const SearchDrawer = () => {
  const searchMovies = useSelector(
    (state: RootState) => state.movies.allMoviesSearchable
  );

  const searchInput = useSelector(
    (state: RootState) => state.movies.searchInput
  );

  const filteredArray = searchMovies
    ?.map((result) => {
      return { ...result, title: result.title.toLowerCase() };
    })
    .filter((result) => result.title.includes(searchInput.toLowerCase()));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: GLOBAL.SPACING.xxxxl,
      }}>
      <TopBar title={'Search'} />

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
        {searchInput.length > 0 &&
          filteredArray?.map((movie) => {
            return (
              <SearchMovieBox
                key={movie.id}
                title={movie.title}
                image={movie.backdrop}
              />
            );
          })}
      </DrawerContentScrollView>
    </View>
  );
};

export default SearchDrawer;
