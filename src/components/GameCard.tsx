import React from 'react';
import {
  View,
  ImageBackground,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import card from '../../assets/netflix-games/dungeon-dwarves-card.jpg';

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
          backgroundColor: '#000',
          zIndex: 10,
          overflow: 'hidden',
        },
        style,
      ]}>
      <ImageBackground
        source={imageSource ? imageSource : card}
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
