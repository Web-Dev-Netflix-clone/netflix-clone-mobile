import { Image, ImageSourcePropType, Text, View } from 'react-native';
import React from 'react';
import { TYPOGRAPHY } from '../global/styles/typography';

import IonIcons from 'react-native-vector-icons/Ionicons';

interface IAvatar {
  id?: string;
  imageSource?: ImageSourcePropType;
  height: number;
  width: number;
  title?: string;
  iconName?: string;
}

const Avatar = ({ imageSource, height, width, title, iconName }: IAvatar) => {
  return (
    <View>
      {imageSource && (
        <Image
          source={imageSource}
          style={{ height: height, width: width, borderRadius: 5 }}
        />
      )}

      {iconName && <IonIcons name={iconName} size={width} color='#fff' />}

      {title && (
        <Text
          style={{
            fontSize: TYPOGRAPHY.FONT_SIZES.sm,
            color: TYPOGRAPHY.COLOR.White,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default Avatar;
