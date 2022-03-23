import { View, Text, ViewStyle } from 'react-native';
import React from 'react';
import { GLOBAL } from '../global/styles/global';
import { IconButton } from 'react-native-paper';
import { TYPOGRAPHY } from '../global/styles/typography';

interface IDiscoverNav {
  style: ViewStyle;
  setModalActive: any;
}

const DiscoverNav = ({ style, setModalActive }: IDiscoverNav) => {
  return (
    <View style={[{ paddingTop: GLOBAL.SPACING.md }, style]}>
      <Text style={TYPOGRAPHY.FONT.body}>Series</Text>
      <Text style={TYPOGRAPHY.FONT.body}>Films</Text>

      <View style={GLOBAL.LAYOUT.rowCenter}>
        <Text
          onPress={() => {
            setModalActive(true);
          }}
          style={TYPOGRAPHY.FONT.body}>
          Categories
        </Text>
        <View style={{ marginTop: -5 }}>
          <IconButton
            icon='chevron-down'
            color='white'
            size={20}
            onPress={() => {
              setModalActive(true);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DiscoverNav;
