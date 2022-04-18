import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { GLOBAL } from '../../../global/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { useActions } from '../../../hooks/useActions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerStackParams } from '../../../navigation/navigation';
import { selectBottomSheetMovie } from '../../../state/selectors/selectors';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const InfoBar = () => {
  const bottomSheetMovie = useSelector(selectBottomSheetMovie);
  const { showBottomSheet } = useActions();
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerStackParams>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: GLOBAL.SPACING.sm,
        backgroundColor: TYPOGRAPHY.COLOR.BlackSecondary,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Ionicons name='add' size={30} color={TYPOGRAPHY.COLOR.White} />
        <Text
          style={{
            fontSize: TYPOGRAPHY.FONT_SIZES.sm,
            color: TYPOGRAPHY.COLOR.White,
          }}>
          My List
        </Text>
      </View>
      <Button
        style={{ backgroundColor: TYPOGRAPHY.COLOR.White, width: '30%' }}
        icon={() => (
          <Icon name='play' size={16} color={TYPOGRAPHY.COLOR.Black} />
        )}
        color={TYPOGRAPHY.COLOR.Black}
        onPress={() => {
          navigation.navigate('MovieDetail', bottomSheetMovie);
        }}>
        Play
      </Button>
      <Pressable
        onPress={() => {
          showBottomSheet();
        }}
        style={{
          alignItems: 'center',
        }}>
        <Ionicons
          name='information-circle-outline'
          size={30}
          color={TYPOGRAPHY.COLOR.White}
        />
        <Text
          style={{
            fontSize: TYPOGRAPHY.FONT_SIZES.sm,
            color: TYPOGRAPHY.COLOR.White,
          }}>
          Info
        </Text>
      </Pressable>
    </View>
  );
};

export default InfoBar;
