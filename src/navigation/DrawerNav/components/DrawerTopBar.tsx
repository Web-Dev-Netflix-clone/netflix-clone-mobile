import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View, ViewStyle } from 'react-native';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { useActions } from '../../../hooks/useActions';

interface ITopBar {
  title: string;
  iconName?: any;
  style?: ViewStyle;
  rightIconName?: any;
}

const TopBar = ({ title, iconName, style, rightIconName }: ITopBar) => {
  const navigation = useNavigation();
  const { searchInActive, myListInActive, searchActive } = useActions();

  return (
    <View
      style={[
        {
          ...GLOBAL.LAYOUT.rowCenter,
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingVertical: GLOBAL.SPACING.sm,
          justifyContent: 'space-between',
        },
        style,
      ]}>
      <View style={GLOBAL.LAYOUT.rowCenter}>
        <Pressable
          onPress={() => {
            searchInActive();
            myListInActive();
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Ionicons
            name={iconName ? iconName : 'arrow-back'}
            size={28}
            color={TYPOGRAPHY.COLOR.White}
            style={{ marginLeft: 10 }}
          />
        </Pressable>

        <Text
          style={{
            color: TYPOGRAPHY.COLOR.White,
            marginLeft: GLOBAL.SPACING.md,
            fontSize: 18,
            fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
          }}>
          {title}
        </Text>
      </View>

      {rightIconName && (
        <Pressable
          style={{ justifyContent: 'flex-end' }}
          onPress={() => {
            searchActive();
          }}>
          <Ionicons
            name={iconName ? iconName : 'search'}
            size={28}
            color={TYPOGRAPHY.COLOR.White}
            style={{ marginRight: 25 }}
          />
        </Pressable>
      )}
    </View>
  );
};

export default TopBar;
