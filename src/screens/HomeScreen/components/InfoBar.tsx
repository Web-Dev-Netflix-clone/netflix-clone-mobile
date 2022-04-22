import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { useActions } from '../../../hooks/useActions';
import { DrawerTabParams } from '../../../navigation/navigation';

import { selectHeroMovie } from '../../../state/selectors/selectors';

const InfoBar = () => {
  const heroMovie = useSelector(selectHeroMovie);
  const {
    showBottomSheet,
    setBottomSheetMovie,
    addMovieToMyList,
    removeMovieFromMyList,
    showNotificationToggle,
  } = useActions();
  const [addToList, setAddToList] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerTabParams>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: GLOBAL.SPACING.sm,
        backgroundColor: TYPOGRAPHY.COLOR.BlackSecondary,
      }}>
      <Pressable
        onPress={() => {
          setAddToList(!addToList);

          !addToList
            ? addMovieToMyList(heroMovie.id)
            : removeMovieFromMyList(heroMovie.id);

          showNotificationToggle(
            addToList ? 'Add to My List' : 'Remove from My List'
          );
        }}
        style={{
          alignItems: 'center',
        }}>
        <Ionicons
          name={!addToList ? 'add' : 'checkmark'}
          size={30}
          color={TYPOGRAPHY.COLOR.White}
        />
        <Text
          style={{
            fontSize: TYPOGRAPHY.FONT_SIZES.sm,
            color: TYPOGRAPHY.COLOR.White,
          }}>
          My List
        </Text>
      </Pressable>
      <Button
        style={{ backgroundColor: TYPOGRAPHY.COLOR.White, width: '30%' }}
        icon={() => (
          <Icon name='play' size={16} color={TYPOGRAPHY.COLOR.Black} />
        )}
        color={TYPOGRAPHY.COLOR.Black}
        onPress={() => {
          setBottomSheetMovie(heroMovie);
          navigation.navigate('MovieDetail', heroMovie);
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
