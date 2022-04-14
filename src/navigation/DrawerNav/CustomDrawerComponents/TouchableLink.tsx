import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TYPOGRAPHY } from '../../../global/styles/typography';

interface ITouchableLink {
  title: string;
  onClick?: () => void;
}

const TouchableLink = ({ title, onClick }: ITouchableLink) => {
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

export default TouchableLink;
