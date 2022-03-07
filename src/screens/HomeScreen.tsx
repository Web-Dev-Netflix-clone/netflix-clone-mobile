import React from 'react';
import { View, Text } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';

const HomeScreen = () => {
  return (
    <View>
      <Text>Font Native Regular: Home Screen</Text>
      <Text style={{ fontFamily: TYPOGRAPHY.FONT.PrimaryLight }}>
        Font: Netflix Light
      </Text>
      <Text style={{ fontFamily: TYPOGRAPHY.FONT.PrimaryRegular }}>
        Font: Netflix Regular
      </Text>
      <Text style={{ fontFamily: TYPOGRAPHY.FONT.PrimaryBold }}>
        Font: Netflix Bold
      </Text>
    </View>
  );
};

export default HomeScreen;
