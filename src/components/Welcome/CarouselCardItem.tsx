import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { CarouselData } from "../../types/data.types";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const SLIDER_HEIGHT = Dimensions.get("window").height * 0.7;

const CarouselCardItem = ({
  item,
  index,
}: {
  item: CarouselData;
  index: number;
}) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.img }}
        style={[styles.image, { position: "relative" }]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{item.header}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SLIDER_WIDTH,
  },
  image: {
    width: SLIDER_WIDTH,
    height: SLIDER_HEIGHT,
  },
  textContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "60%",
    backgroundColor: "rgba(0, 0, 0, .65)",
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  header: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CarouselCardItem;
