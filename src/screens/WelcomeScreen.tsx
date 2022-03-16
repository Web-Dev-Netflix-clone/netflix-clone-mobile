import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CAROUSELDATA from "../../assets/MockData/DummyCarouselData";
import CarouselCardItem, {
  SLIDER_WIDTH,
} from "../components/Welcome/CarouselCardItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/navigation";
import { TYPOGRAPHY } from "../global/styles/typography";

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const isCarousel = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Carousel
          layout="stack"
          layoutCardOffset={18}
          ref={isCarousel}
          data={CAROUSELDATA}
          renderItem={CarouselCardItem}
          onSnapToItem={(index) => setActiveSlide(index)}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={SLIDER_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
        <Pagination
          dotsLength={CAROUSELDATA.length}
          activeDotIndex={activeSlide}
          // @ts-ignore
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "gray",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
          tappableDots={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "red",
    height: 50,
    width: "95%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    color: "white",
    fontSize: TYPOGRAPHY.FONT_SIZES.md,
  },
});
