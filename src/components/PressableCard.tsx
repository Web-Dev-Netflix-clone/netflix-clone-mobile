import { Children, ReactChildren, ReactNode } from 'react';
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

interface IPressableCard {
  background: ImageSourcePropType;
  onClick?: () => void;
  title?: string;
  height?: number;
  width?: number | string;
  wrapperWidth?: number | string;
  children?: ReactNode;
}

export const PressableCard = ({
  background,
  onClick,
  title,
  height = 170,
  width = 100,
  wrapperWidth,
  children,
}: IPressableCard) => {
  return (
    <View style={{ position: 'relative', width: wrapperWidth }}>
      <Pressable
        onPress={onClick}
        style={[styles(height, width).card, GLOBAL.SHADOWS.shadowMedium]}>
        <ImageBackground style={styles().image} source={background} />
        <View style={[{ padding: GLOBAL.SPACING.sm }]}>
          {title && (
            <Text
              style={{
                fontSize: TYPOGRAPHY.FONT_SIZES.xsm,
                fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
              }}>
              {title}
            </Text>
          )}
          {children}
        </View>
      </Pressable>
    </View>
  );
};

const styles = (height?: number | string, width?: number | string) =>
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
