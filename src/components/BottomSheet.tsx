import { Button, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useActions } from "../hooks/useActions";

const BottomSheet = () => {
  const { hideBottomSheet } = useActions();

  return (
    <View style={styles.content}>
      <View style={{ position: "absolute", top: 3, right: 0 }}>
        <Button title="Hide" onPress={hideBottomSheet} />
      </View>
      <View style={styles.movieInfo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://sm.ign.com/t/ign_za/cover/t/the-adam-p/the-adam-project_cnr4.256.jpg",
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ marginBottom: 5, fontWeight: "bold", fontSize: 18 }}>
            The Adam Project
          </Text>
          <View style={styles.textSmall}>
            <View>
              <Text>2022</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <Text>1h 46m</Text>
            </View>
          </View>
          <Text>
            After accidentally crash-landing in 2022, time-traveling fighter
            pilot Adam Reed teams up with his 12-year-old self on a mission to
            save the future.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    height: "35%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  movieInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
  },
  imageContainer: {
    alignSelf: "flex-start",
    width: "40%",
    height: "80%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    justifyContent: "flex-start",
    height: "100%",
    width: "60%",
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
  },
  textSmall: {
    flexDirection: "row",
    width: "100%",
  },
});
