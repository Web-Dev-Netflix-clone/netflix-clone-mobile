import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { GLOBAL } from '../../../global/styles/global';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectBottomSheetMovie } from '../../../state/selectors/selectors';

const height = Dimensions.get('window').height;
const modalHeight = height * 0.4;

const BottomSheetContent = () => {
  const { hideBottomSheet } = useActions();
  const { title, description, poster } = useSelector(selectBottomSheetMovie);

  const runtime = '1h 46m';
  const year = '1982';

  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <Pressable onPress={hideBottomSheet}>
          <Ionicons
            name='close-outline'
            size={35}
            color={TYPOGRAPHY.COLOR.White}
          />
        </Pressable>
      </View>
      <View style={styles.movieInfoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              typeof poster === 'string'
                ? {
                    uri: poster,
                  }
                : poster
            }
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[GLOBAL.TEXT.Bold, styles.headerText]}>{title}</Text>
          <View style={styles.movieDetails}>
            <Text style={TYPOGRAPHY.FONT.defaultGrey}>{year}</Text>
            <Image
              style={styles.icon}
              source={require('../../../../assets/kijkwijzer-icons/12.jpg')}
            />
            <Text style={TYPOGRAPHY.FONT.defaultGrey}>{runtime}</Text>
          </View>
          <View style={styles.description}>
            <Text
              style={{
                ...TYPOGRAPHY.FONT.body,
                fontSize: TYPOGRAPHY.FONT_SIZES.sm,
              }}>
              {description.length > 200
                ? description.slice(0, 200) + '...'
                : description}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ alignItems: 'center' }}>
          <Ionicons
            name='play-circle'
            size={28}
            color={TYPOGRAPHY.COLOR.White}
          />
          <Text style={TYPOGRAPHY.FONT.defaultGrey}>Play</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name='download' size={28} color={TYPOGRAPHY.COLOR.White} />
          <Text style={TYPOGRAPHY.FONT.defaultGrey}>Download</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name='add' size={28} color={TYPOGRAPHY.COLOR.White} />
          <Text style={TYPOGRAPHY.FONT.defaultGrey}>My List</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Ionicons
            name='share-social-outline'
            size={28}
            color={TYPOGRAPHY.COLOR.White}
          />
          <Text style={TYPOGRAPHY.FONT.defaultGrey}>Share</Text>
        </View>
      </View>

      <Pressable style={styles.infoButton} onPress={() => {}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            style={{ marginHorizontal: GLOBAL.SPACING.sm }}
            name='information-circle-outline'
            size={24}
            color={TYPOGRAPHY.COLOR.White}
          />
          <Text style={TYPOGRAPHY.FONT.default}>Details & More</Text>
        </View>
        <View>
          <MaterialIcons
            name='keyboard-arrow-right'
            size={26}
            color={TYPOGRAPHY.COLOR.White}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: TYPOGRAPHY.COLOR.DarkTertiary,
    height: modalHeight,
    borderRadius: 15,
  },
  closeButton: {
    position: 'absolute',
    top: GLOBAL.SPACING.sm,
    right: GLOBAL.SPACING.xxsm,
    zIndex: 10,
  },
  movieInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '60%',
    marginTop: GLOBAL.SPACING.sm,
    marginBottom: GLOBAL.SPACING.md,
  },
  imageContainer: {
    alignSelf: 'flex-start',
    width: '30%',
    height: '100%',
  },
  image: {
    marginLeft: 8,
    height: '100%',
    width: '100%',
  },
  textContainer: {
    justifyContent: 'flex-start',
    width: '70%',
    paddingHorizontal: GLOBAL.SPACING.lg,
  },
  movieDetails: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: GLOBAL.SPACING.sm,
  },
  buttonDescription: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '15%',
    borderWidth: 1,
    borderTopColor: TYPOGRAPHY.COLOR.Grey,
    paddingTop: GLOBAL.SPACING.xxsm,
  },
});
