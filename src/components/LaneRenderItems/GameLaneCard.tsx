import React from 'react';
import { PressableCard } from '../PressableCard';

import { View, Text } from 'react-native';

import { GLOBAL } from '../../global/styles/global';
import { useNavigation } from '@react-navigation/native';
import { TYPOGRAPHY } from '../../global/styles/typography';
import GameCard from '../GameCard';

interface GameLaneCard {
  goTo: { key: string; params?: any };
}

export const GameLaneCard = ({ goTo }: GameLaneCard) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: GLOBAL.SPACING.sm }}>
      <PressableCard onClick={() => {}} height={180} width={100}>
        <GameCard />

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
