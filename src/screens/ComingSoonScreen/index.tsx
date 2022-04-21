import React, { useCallback } from "react";
import { FlatList, View, VirtualizedList } from "react-native";
import { useSelector } from "react-redux";
import { TYPOGRAPHY } from "../../global/styles/typography";
import { selectComingSoonMovies } from "../../state/selectors/selectors";
import { IMovieDetailsTransform } from "../../types/data.types";
import ComingSoonItem from "./components/ComingSoonItem";

export interface IMovieSet {
  genre: string;
  movies: IMovieDetailsTransform[];
}

const ComingSoonScreen = () => {
  const comingSoon = useSelector(selectComingSoonMovies);

  const keyExtractor = useCallback(() => {
    return Math.random().toString();
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <ComingSoonItem item={item} />;
  }, []);

  const getItem = (data: { [x: string]: object }, index: number) => {
    return data[index];
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: TYPOGRAPHY.COLOR.Black,
      }}
    >
      {comingSoon && (
        <VirtualizedList
          data={comingSoon}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItem={getItem}
          getItemCount={(data) => data.length}
          initialNumToRender={2}
        />
      )}
    </View>
  );
};

export default ComingSoonScreen;
