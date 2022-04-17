import React from 'react';
import {
  View,
  ImageBackground,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import gameCardImage from '../../../../assets/netflix-games/dungeon-dwarves-card.jpg';
import { TYPOGRAPHY } from '../../../global/styles/typography';

interface IGameCard {
  style?: ViewStyle;
  height?: number | string;
  width?: number | string;
  imageSource?: ImageSourcePropType;
}

const GameCard = ({ style, height, width, imageSource }: IGameCard) => {
  return (
    <View
      style={[
        {
          borderRadius: 20,
          height: height ? height : 100,
          width: width ? width : 100,
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          zIndex: 10,
          overflow: 'hidden',
        },
        style,
      ]}>
      <ImageBackground
        source={imageSource ? imageSource : gameCardImage}
        resizeMode='stretch'
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </View>
  );
};

export default GameCard;
