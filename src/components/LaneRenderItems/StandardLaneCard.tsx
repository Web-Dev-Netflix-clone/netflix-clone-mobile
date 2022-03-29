import React from 'react';
import { PressableCard } from '../PressableCard';
import image from '../../../assets/images/posters/stranger-things.jpg';
import { GLOBAL } from '../../global/styles/global';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface IStandardLaneCard {
  goTo: { key: string; params?: any };
}

export const StandardLaneCard = ({ goTo }: IStandardLaneCard) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: GLOBAL.SPACING.sm }}>
      <PressableCard
        background={image}
        onClick={() => navigation.navigate(goTo)}
        height={200}
        width={150}
      />
    </View>
  );
};
