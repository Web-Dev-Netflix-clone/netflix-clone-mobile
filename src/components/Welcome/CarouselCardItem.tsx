import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { CarouselData } from "../../types/data.types";
import { TYPOGRAPHY } from "../../global/styles/typography";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const SLIDER_HEIGHT = Dimensions.get("window").height * 0.8;

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
        source={item.source}
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
    backgroundColor: "black",
  },
  image: {
    width: SLIDER_WIDTH,
    height: SLIDER_HEIGHT,
  },
  textContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    justifyContent: "flex-end",
  },
  header: {
    color: "white",
    textAlign: "center",
    marginHorizontal: 50,
    marginBottom: 10,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    fontSize: TYPOGRAPHY.FONT_SIZES.xl,
  },
  text: {
    color: TYPOGRAPHY.COLOR.GreyLight,
    textAlign: "center",
    marginHorizontal: 100,
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    fontSize: TYPOGRAPHY.FONT_SIZES.md,
  },
});

export default CarouselCardItem;
