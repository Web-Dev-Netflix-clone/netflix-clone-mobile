import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { CarouselData } from '../../../types/data.types';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const SLIDER_HEIGHT = Dimensions.get('window').height * 0.8;

export interface ICarouselCardItem {
  item: CarouselData;
  index: number;
}

const CarouselCardItem = ({ item, index }: ICarouselCardItem) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.source}
        style={{ ...styles.image, position: 'relative' }}
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
    backgroundColor: TYPOGRAPHY.COLOR.Black,
  },
  image: {
    width: SLIDER_WIDTH,
    height: SLIDER_HEIGHT,
  },
  textContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    justifyContent: 'flex-end',
    paddingBottom: GLOBAL.SPACING.lg,
  },
  header: {
    color: TYPOGRAPHY.COLOR.White,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    fontSize: TYPOGRAPHY.FONT_SIZES.xxl,
  },
  text: {
    color: TYPOGRAPHY.COLOR.GreyLight,
    textAlign: 'center',
    marginHorizontal: GLOBAL.SPACING.md,
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    fontSize: TYPOGRAPHY.FONT_SIZES.md,
  },
});

export default CarouselCardItem;
