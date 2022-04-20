import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

interface IPressableIconBox {
  iconName: string;
  text: string;
  onClick?: () => void;
}

const PressableIconBox = ({ iconName, text, onClick }: IPressableIconBox) => {
  return (
    <Pressable onPress={onClick}>
      <View
        style={{
          paddingVertical: GLOBAL.SPACING.md,
          marginLeft: GLOBAL.SPACING.md,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons
          style={{ marginBottom: 5 }}
          name={iconName}
          size={30}
          color={TYPOGRAPHY.COLOR.White}
        />
        <Text style={TYPOGRAPHY.FONT.subtitle}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default PressableIconBox;
