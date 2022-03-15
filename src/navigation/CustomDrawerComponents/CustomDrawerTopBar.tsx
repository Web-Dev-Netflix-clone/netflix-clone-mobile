import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchInActive } from '../../state/action-creators/appStateActions';

interface ICustomDrawerTopBar {
  title: string;
  iconName?: string;
}

const CustomDrawerTopBar = ({ title, iconName }: ICustomDrawerTopBar) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
          dispatch(searchInActive());
          // searchInActive();
          navigation.dispatch(DrawerActions.closeDrawer());
        }}>
        <Ionicons
          // how to type this?
          //@ts-ignore
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
