import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useActions } from '../../../hooks/useActions';

interface ICustomDrawerTopBar {
  title: string;
  iconName?: any;
}

const CustomDrawerTopBar = ({ title, iconName }: ICustomDrawerTopBar) => {
  const navigation = useNavigation();
  const { searchInActive } = useActions();

  return (
    <View
      style={[
        GLOBAL.LAYOUT.rowCenter,
        {
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingVertical: GLOBAL.SPACING.sm,
        },
      ]}>
      <Pressable
        onPress={() => {
          searchInActive();
          navigation.dispatch(DrawerActions.closeDrawer());
        }}>
        <Ionicons
          name={iconName ? iconName : 'arrow-back'}
          size={26}
          color={TYPOGRAPHY.COLOR.White}
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
  );
};

export default CustomDrawerTopBar;
