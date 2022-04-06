import React, { ReactNode } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

interface IPressableCard {
  background?: ImageSourcePropType;
  onClick?: () => void;
  title?: string;
  height?: number;
  width?: number | string;
  wrapperWidth?: number | string;
  children?: ReactNode;
  cardRadius?: number;
  style?: ViewStyle;
}

export const PressableCard = ({
  background,
  onClick,
  title,
  height = 170,
  width = 100,
  wrapperWidth,
  children,
  cardRadius = 4,
  style,
}: IPressableCard) => {
  return (
    <View style={[{ position: 'relative', width: wrapperWidth }, style]}>
      <Pressable
        onPress={onClick}
        style={[
          styles(height, width, cardRadius).card,
          GLOBAL.SHADOWS.shadowMedium,
          ,
          style,
        ]}>
        {background && (
          <ImageBackground
            style={styles().image}
            //@ts-ignore
            source={{ uri: background }}
          />
        )}
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

const styles = (
  height?: number | string,
  width?: number | string,
  cardRadius?: number
) =>
  StyleSheet.create({
    card: {
      flexBasis: width,
      backgroundColor: TYPOGRAPHY.COLOR.Black,
      // margin: GLOBAL.SPACING.sm,
      marginBottom: GLOBAL.SPACING.sm,
      height: height,
      width: width,
      borderRadius: cardRadius,
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  });
