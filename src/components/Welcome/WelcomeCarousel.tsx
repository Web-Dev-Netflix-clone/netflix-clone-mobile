import { View } from "react-native";
import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CAROUSELDATA from "../../../assets/MockData/DummyCarouselData";
import CarouselCardItem, { SLIDER_WIDTH } from "./CarouselCardItem";

const WelcomeCarousel = () => {
  const isCarousel = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
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
  );
};

export default WelcomeCarousel;