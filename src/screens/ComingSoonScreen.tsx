import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import ComingSoonItem from "../components/ComingSoonItem";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../state";
import { movieTags } from "../../assets/MockData/movieTags";
import { IMovie } from "../state/actionsInterfaces/moviesInterfaces";
import uuid from "react-native-uuid";

export interface IMovieSet {
  genre: string;
  movies: IMovie[];
}

const mockData = [
  {
    id: 1,
    title: "The Adam Project",
    videoId: "IE8HIsIrq4o",
    description:
      "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.",
  },
  {
    id: 2,
    title: "The Adam Project",
    videoId: "IE8HIsIrq4o",
    description:
      "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.",
  },
  {
    id: 3,
    title: "The Adam Project",
    videoId: "IE8HIsIrq4o",
    description:
      "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.",
  },
  {
    id: 4,
    title: "The Adam Project",
    videoId: "IE8HIsIrq4o",
    description:
      "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12 year-old self on a mission to save the future.",
  },
];

const ComingSoonScreen = () => {
  const { fetchMovies } = useActions();

  const movies = useSelector((state: RootState) => state.movies.allMovies);
  const movie = useSelector((state: RootState) => state.movies.singleMovie);

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <FlatList
        key={uuid.v4().toString()}
        data={mockData}
        renderItem={(item) => <ComingSoonItem item={item} />}
      />
    </View>
  );
};

export default ComingSoonScreen;
