import React, { useEffect, useRef } from 'react';
import PressableCard from '../../PressableCard';
import { GLOBAL } from '../../../global/styles/global';
import { ImageSourcePropType, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface IStandardLaneCard {
  goTo: { key: string; params?: any };
  image: ImageSourcePropType;
}

const StandardLaneCard = ({ goTo, image }: IStandardLaneCard) => {
  const navigation = useNavigation();

  const { key, params } = goTo;

  return (
    <View style={{ marginRight: GLOBAL.SPACING.sm }}>
      <PressableCard
        background={image}
        onClick={() => {
          // @ts-ignore
          navigation.navigate(key, params);
        }}
        height={200}
        width={150}
      />
    </View>
  );
};

export default React.memo(StandardLaneCard);
