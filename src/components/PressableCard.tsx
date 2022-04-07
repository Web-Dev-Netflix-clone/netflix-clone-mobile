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
import { IMGSTYLES } from '../global/styles/imgStyles';
import { TYPOGRAPHY } from '../global/styles/typography';

interface IPressableCard {
  background?: ImageSourcePropType | string;
  onClick?: () => void;
  title?: string;
  height?: number;
  width?: number | string;
  wrapperWidth?: number | string;
  children?: ReactNode;
  cardRadius?: number;
  style?: ViewStyle;
}

const PressableCard = ({
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
            style={IMGSTYLES.background}
            source={
              typeof background === 'string'
                ? { uri: background, cache: 'force-cache' }
                : background
            }
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
      marginBottom: GLOBAL.SPACING.sm,
      height: height,
      width: width,
      borderRadius: cardRadius,
    },
  });

export default React.memo(PressableCard);
