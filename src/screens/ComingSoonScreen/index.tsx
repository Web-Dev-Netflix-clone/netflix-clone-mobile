<<<<<<< HEAD
import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import ComingSoonItem from "./components/ComingSoonItem";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { randomIntFromRange } from "../../utils/utils";
import { TYPOGRAPHY } from "../../global/styles/typography";
import { IMovieDetailsTransform } from "../../types/data.types";
=======
import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import ComingSoonItem from './components/ComingSoonItem';
import { useSelector } from 'react-redux';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { IMovieDetailsTransform } from '../../types/data.types';
import { selectComingSoonMovies } from '../../state/selectors/selectors';
>>>>>>> 74bd90d0ab634ea89397bef0751b539d1fdc50af

export interface IMovieSet {
  genre: string;
  movies: IMovieDetailsTransform[];
}

const ComingSoonScreen = () => {
<<<<<<< HEAD
  const movies = useSelector((state: RootState) => state.movies.searchMovies);

  const comingSoon = new Array(10)
    .fill("x")
    .map(() => movies[randomIntFromRange(1, movies.length)]);
=======
  const comingSoon = useSelector(selectComingSoonMovies);
>>>>>>> 74bd90d0ab634ea89397bef0751b539d1fdc50af

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
        width: "100%",
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: TYPOGRAPHY.COLOR.Black,
<<<<<<< HEAD
      }}
    >
      <FlatList
        data={comingSoon}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
=======
      }}>
      {comingSoon && (
        <FlatList
          data={comingSoon}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
>>>>>>> 74bd90d0ab634ea89397bef0751b539d1fdc50af
    </View>
  );
};

export default ComingSoonScreen;
