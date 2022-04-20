import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CAROUSELDATA from '../../../../assets/mock-data/dummyCarouselData';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { CarouselData } from '../../../types/data.types';
import CarouselCardItem, { SLIDER_WIDTH } from './CarouselCardItem';

const WelcomeCarousel = () => {
  const isCarousel = useRef<Carousel<CarouselData>>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={{ backgroundColor: TYPOGRAPHY.COLOR.Black, zIndex: 1 }}>
      <Carousel
        layout='stack'
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
        //@ts-ignore
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 25,
          padding: GLOBAL.SPACING.sm,
          marginHorizontal: GLOBAL.SPACING.md,
          backgroundColor: 'gray',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        tappableDots={true}
      />
    </View>
  );
};

export default WelcomeCarousel;
