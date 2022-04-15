import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { GLOBAL } from '../../../global/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { TYPOGRAPHY } from '../../../global/styles/typography';

const InfoBar = () => {
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
        style={{ backgroundColor: TYPOGRAPHY.COLOR.White }}
        icon='play'
        color='#000'
        onPress={() => {}}>
        Play
      </Button>
      <View
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
      </View>
    </View>
  );
};

export default InfoBar;
