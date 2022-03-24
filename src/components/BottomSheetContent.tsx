import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useActions } from "../hooks/useActions";
import { TYPOGRAPHY } from "../global/styles/typography";
import { GLOBAL } from "../global/styles/global";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const BottomSheet = () => {
  const { hideBottomSheet } = useActions();

  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <Pressable onPress={hideBottomSheet}>
          <Ionicons name="close-outline" size={35} color="white" />
        </Pressable>
      </View>
      <View style={styles.movieInfoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://sm.ign.com/t/ign_za/cover/t/the-adam-p/the-adam-project_cnr4.256.jpg",
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[GLOBAL.TEXT.Bold, styles.headerText]}>
            The Adam Project
          </Text>
          <View style={styles.movieDetails}>
            <Text style={GLOBAL.CTA.Style.secondaryText}>2022</Text>
            <Image
              style={styles.icon}
              source={require("../../assets/kijkwijzer-icons/12.jpg")}
            />
            <Text style={GLOBAL.CTA.Style.secondaryText}>1h 46m</Text>
          </View>
          <View style={styles.description}>
            <Text style={GLOBAL.CTA.Style.primaryText}>
              After accidentally crash-landing in 2022, time-traveling fighter
              pilot Adam Reed teams up with his 12-year-old self on a mission to
              save the future.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="play-circle" size={30} color="white" />
          <Text style={GLOBAL.CTA.Style.secondaryText}>Play</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="download" size={30} color="white" />
          <Text style={GLOBAL.CTA.Style.secondaryText}>Download</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="add" size={30} color="white" />
          <Text style={GLOBAL.CTA.Style.secondaryText}>My List</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="share-social-outline" size={30} color="white" />
          <Text style={GLOBAL.CTA.Style.secondaryText}>Share</Text>
        </View>
      </View>

      <Pressable
        style={styles.infoButton}
        onPress={() => console.log("more info")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            style={{ marginHorizontal: GLOBAL.SPACING.sm }}
            name="information-circle-outline"
            size={24}
            color="white"
          />
          <Text style={GLOBAL.CTA.Style.primaryText}>Details & More</Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={26} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: TYPOGRAPHY.COLOR.Dark,
    height: "35%",
    borderRadius: 15,
  },
  closeButton: {
    position: "absolute",
    top: GLOBAL.SPACING.sm,
    right: GLOBAL.SPACING.xxsm,
    zIndex: 10,
  },
  movieInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "50%",
    marginTop: 10,
  },
  imageContainer: {
    alignSelf: "flex-start",
    width: "30%",
    height: "90%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    justifyContent: "flex-start",
    height: "50%",
    width: "70%",
    paddingHorizontal: GLOBAL.SPACING.sm,
  },
  movieDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginHorizontal: GLOBAL.SPACING.sm,
  },
  headerText: {
    fontSize: TYPOGRAPHY.FONT_SIZES.lg,
    marginBottom: GLOBAL.SPACING.xxsm,
  },
  description: {
    marginTop: GLOBAL.SPACING.xxsm,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "20%",
  },
  buttonDescription: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "15%",
    borderWidth: 1,
    borderTopColor: TYPOGRAPHY.COLOR.Grey,
    paddingTop: GLOBAL.SPACING.xxsm,
  },
});
