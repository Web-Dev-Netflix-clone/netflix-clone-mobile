import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import ComingSoonItem from './components/ComingSoonItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import { randomIntFromRange } from '../../utils/utils';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { IMovieDetailsTransform } from '../../types/data.types';

export interface IMovieSet {
  genre: string;
  movies: IMovieDetailsTransform[];
}

const ComingSoonScreen = () => {
  const movies = useSelector((state: RootState) => state.movies.searchMovies);

  const comingSoon = new Array(10)
    .fill('x')
    .map(() => movies[randomIntFromRange(1, movies.length)]);

  const keyExtractor = useCallback(() => {
    return Math.random().toString();
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <ComingSoonItem item={item} />;
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: TYPOGRAPHY.COLOR.Black,
      }}>
      <FlatList
        data={comingSoon}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ComingSoonScreen;
