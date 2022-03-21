import { View, Text, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import { GLOBAL } from '../global/styles/global';
import { IconButton } from 'react-native-paper';
import { TYPOGRAPHY } from '../global/styles/typography';

interface IDiscoverNav {
  style: ViewStyle;
}

const DiscoverNav = ({ style }: IDiscoverNav) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={[{ paddingTop: GLOBAL.SPACING.md }, style]}>
      <Text style={TYPOGRAPHY.FONT.body}>Series</Text>
      <Text style={TYPOGRAPHY.FONT.body}>Films</Text>

      <View style={GLOBAL.LAYOUT.rowCenter}>
        <Text style={TYPOGRAPHY.FONT.body}>Categories</Text>
        <View style={{ marginTop: -5 }}>
          <IconButton
            icon='chevron-down'
            color='white'
            size={20}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </View>
  );
};

export default DiscoverNav;
