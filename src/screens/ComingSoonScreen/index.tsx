import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import ComingSoonItem from './components/ComingSoonItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import { IMovie } from '../../state/actionsInterfaces/moviesInterfaces';
import { randomIntFromRange } from '../../utils/utils';

export interface IMovieSet {
  genre: string;
  movies: IMovie[];
}

const ComingSoonScreen = () => {
  const movies = useSelector((state: RootState) => state.movies.searchMovies);

  const comingSoon = new Array(10)
    .fill('x')
    .map((x) => movies[randomIntFromRange(1, movies.length)]);

  const keyExtractor = useCallback((item) => {
    return item.id + Math.random().toString();
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
        backgroundColor: '#000',
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
