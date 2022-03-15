import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TYPOGRAPHY } from '../../global/styles/typography';

interface ICustomDrawerTouchableLink {
  title: string;
  onClick?: () => void;
}

const CustomDrawerTouchableLink = ({
  title,
  onClick,
}: ICustomDrawerTouchableLink) => {
  return (
    <TouchableOpacity onPress={onClick} style={{ paddingVertical: 15 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 15,
            color: TYPOGRAPHY.COLOR.White,
            fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
            marginLeft: 5,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomDrawerTouchableLink;
