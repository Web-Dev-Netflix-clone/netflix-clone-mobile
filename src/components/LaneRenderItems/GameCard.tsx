import React from 'react';
import { PressableCard } from '../PressableCard';

import { ImageBackground, View, Text } from 'react-native';
import card from '../../../assets/netflix-games/dungeon-dwarves-card.jpg';
import { GLOBAL } from '../../global/styles/global';
import { useNavigation } from '@react-navigation/native';
import { TYPOGRAPHY } from '../../global/styles/typography';

interface GameCard {
  goTo: { key: string; params?: any };
}

export const GameCard = ({ goTo }: GameCard) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: GLOBAL.SPACING.sm }}>
      <PressableCard onClick={() => {}} height={180} width={100}>
        <View
          style={{
            borderRadius: 20,
            height: 100,
            width: 100,
            backgroundColor: '#000',
            zIndex: 10,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={card}
            resizeMode='stretch'
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View>
          <Text style={{ ...TYPOGRAPHY.FONT.body, color: 'white' }}>
            Dungeon Dwarves
          </Text>
          <Text style={{ ...TYPOGRAPHY.FONT.subtitle, color: 'white' }}>
            Role-Playing
          </Text>
        </View>
      </PressableCard>
    </View>
  );
};
