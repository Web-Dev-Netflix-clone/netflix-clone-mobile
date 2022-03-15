import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';

import { Ionicons, Feather } from '@expo/vector-icons';

interface CustomDrawerSocialBox {
  imageSource?: ImageSourcePropType;
  height: number;
  width: number;
  iconName?: string;
  title?: string;
  borderWidth?: number;
}

const CustomDrawerSocialBox = ({
  imageSource,
  height,
  width,
  iconName,
  title,
  borderWidth,
}: CustomDrawerSocialBox) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: GLOBAL.SPACING.sm,
        borderRightWidth: borderWidth ? borderWidth : 2,
        width: 100,
        height: 100,
        borderColor: TYPOGRAPHY.COLOR.Grey,
      }}>
      {imageSource && (
        <Image source={imageSource} style={{ height: height, width: width }} />
      )}

      {
        //@ts-ignore
        iconName && <Feather name={iconName} size={width} />
      }
      <Text
        style={[
          TYPOGRAPHY.FONT.body,
          { fontSize: TYPOGRAPHY.FONT_SIZES.sm },
          { textAlign: 'left', marginTop: 5 },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default CustomDrawerSocialBox;
