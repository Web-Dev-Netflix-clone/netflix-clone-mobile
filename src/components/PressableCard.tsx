import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  ImageSourcePropType,
} from 'react-native';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

// Ik heb dit component er even ingelaten als voorbeeld voor hoe je een redelijk
// complex component kan typen! Weet niet of we het verder nog gaan gebruiken.

interface IPressableCard {
  background: ImageSourcePropType;
  onClick: () => void;
  title: string;
  height?: number;
  width?: number;
}

export const PressableCard = ({
  background,
  onClick,
  title,
  height = 170,
  width = 100,
}: IPressableCard) => {
  return (
    <Pressable
      onPress={onClick}
      style={[styles(height, width).card, GLOBAL.SHADOWS.shadowMedium]}>
      <ImageBackground style={styles().image} source={background} />
      <View style={{ zIndex: 1, padding: 15 }}>
        <Text
          style={{
            fontSize: TYPOGRAPHY.FONT_SIZES.xsm,
            fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
          }}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = (height?: number, width?: number) =>
  StyleSheet.create({
    card: {
      flexBasis: width,
      backgroundColor: TYPOGRAPHY.COLOR.Black,
      margin: GLOBAL.SPACING.sm,
      height: height,
      width: width,
      borderRadius: 4,
    },
    image: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
    },
  });
