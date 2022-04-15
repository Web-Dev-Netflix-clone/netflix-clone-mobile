import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';

interface IPillTag {
  backgroundColor: string;
  iconName: string;
  text: string;
  style?: ViewStyle;
}

const PillTag = ({ backgroundColor, iconName, text, style }: IPillTag) => {
  return (
    <View
      style={[
        GLOBAL.LAYOUT.rowCenter,
        {
          width: '27%',
          backgroundColor,
          borderRadius: 20,
          padding: 4,
          justifyContent: 'space-evenly',
        },
        style,
      ]}>
      <Ionicons color={'#fff'} name={iconName} size={12} />
      <Text style={{ ...TYPOGRAPHY.FONT.body, marginBottom: 0, fontSize: 12 }}>
        {text}
      </Text>
    </View>
  );
};

export default PillTag;
