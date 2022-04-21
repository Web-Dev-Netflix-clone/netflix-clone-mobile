import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import { TYPOGRAPHY } from '../../global/styles/typography';

import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar';

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

  const keyExtractor = useCallback((item) => item.id, []);
  const renderItem = useCallback(({ item }: { item: any }) => {
    return <SearchMovieBox movie={item} />;
  }, []);

  return (
    <>
      <DrawerTopBar title={'Search'} />

      <SearchBar />

      <Text
        style={{
          ...TYPOGRAPHY.FONT.h2,
          marginBottom: GLOBAL.SPACING.md,
          marginLeft: GLOBAL.SPACING.sm,
        }}>
        Top Searches
      </Text>

      {!!searchInput.length && (
        <FlatList
          data={searchMovies}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
};

export default SearchDrawer;
