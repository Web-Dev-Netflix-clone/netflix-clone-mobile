import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { IconButton } from 'react-native-paper';
import { TYPOGRAPHY } from '../global/styles/typography';

// import { hideNavigationBar } from 'react-native-navigation-bar-color';

interface IDiscoverNav {
  style: ViewStyle;
  setModalActive: (bool: boolean) => void;
}

const DiscoverNav = ({ style, setModalActive }: IDiscoverNav) => {
  return (
    <View style={[{ paddingTop: GLOBAL.SPACING.md }, style]}>
      <Text
        style={{
          ...TYPOGRAPHY.FONT.body,
          fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
          fontSize: 16,
        }}>
        Series
      </Text>
      <Text
        style={{
          ...TYPOGRAPHY.FONT.body,
          fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
          fontSize: 16,
        }}>
        Films
      </Text>

      <View style={GLOBAL.LAYOUT.rowCenter}>
        <Text
          onPress={() => {
            setModalActive(true);
            // hideNavigationBar();
          }}
          style={{
            ...TYPOGRAPHY.FONT.body,
            fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
            fontSize: 16,
          }}>
          Categories
        </Text>
        <View style={{ marginTop: -5 }}>
          <IconButton
            icon='chevron-down'
            color='white'
            size={20}
            onPress={() => {
              setModalActive(true);
              // hideNavigationBar();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DiscoverNav;
