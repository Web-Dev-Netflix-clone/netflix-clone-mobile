import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { selectComingSoonMovies } from '../../state/selectors/selectors';
import { IMovieDetailsTransform } from '../../types/data.types';
import ComingSoonItem from './components/ComingSoonItem';

export interface IMovieSet {
  genre: string;
  movies: IMovieDetailsTransform[];
}

const ComingSoonScreen = () => {
  const comingSoon = useSelector(selectComingSoonMovies);

  const keyExtractor = useCallback((item) => {
    return Math.random().toString();
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <ComingSoonItem item={item} />;
  }, []);

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: TYPOGRAPHY.COLOR.Black,
      }}>
      {comingSoon && (
        <FlatList
          data={comingSoon}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

export default ComingSoonScreen;
