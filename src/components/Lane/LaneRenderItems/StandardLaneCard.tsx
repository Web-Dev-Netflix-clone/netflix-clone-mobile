import React, { useEffect, useRef } from 'react';
import PressableCard from '../../PressableCard';
import { GLOBAL } from '../../../global/styles/global';
import { ImageSourcePropType, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useActions } from '../../../hooks/useActions';

interface IStandardLaneCard {
  goTo: { key: string; params?: any };
  image: ImageSourcePropType;
}

const StandardLaneCard = ({ goTo, image }: IStandardLaneCard) => {
  const { setBottomSheetMovie, showBottomSheet } = useActions();

  const { params } = goTo;

  return (
    <View style={{ marginRight: GLOBAL.SPACING.sm }}>
      <PressableCard
        background={image}
        onClick={() => {
          setBottomSheetMovie(params);
          showBottomSheet();
        }}
        height={200}
        width={150}
      />
    </View>
  );
};

export default React.memo(StandardLaneCard);
