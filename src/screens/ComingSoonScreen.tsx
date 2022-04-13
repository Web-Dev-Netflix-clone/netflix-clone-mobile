import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import ComingSoonItem from '../components/ComingSoonItem';
import { useSelector } from 'react-redux';
import { RootState } from '../state';
import { IMovie } from '../state/actionsInterfaces/moviesInterfaces';

export interface IMovieSet {
  genre: string;
  movies: IMovie[];
}

const mockData = [
  {
    id: 1,
    title: 'The Adam Project',
    videoId: 'IE8HIsIrq4o',
    description:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.',
  },
  {
    id: 2,
    title: 'The Adam Project',
    videoId: 'IE8HIsIrq4o',
    description:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.',
  },
  {
    id: 3,
    title: 'The Adam Project',
    videoId: 'IE8HIsIrq4o',
    description:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.',
  },
  {
    id: 4,
    title: 'The Adam Project',
    videoId: 'IE8HIsIrq4o',
    description:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.',
  },
];

const ComingSoonScreen = () => {
  const movies = useSelector((state: RootState) => state.movies.allMovies);
  const movie = useSelector((state: RootState) => state.movies.singleMovie);

  const keyExtractor = useCallback((item) => {
    return item.id;
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
        data={mockData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ComingSoonScreen;
