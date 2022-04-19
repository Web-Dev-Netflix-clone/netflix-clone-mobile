import React from 'react';

import { View, Text } from 'react-native';

import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import PressableCard from '../../PressableCard';
import GameCard from '../../../screens/GamesScreen/components/GameCard';

const GameLaneCard = () => {
  return (
    <View style={{ marginRight: GLOBAL.SPACING.sm }}>
      <PressableCard onClick={() => {}} height={180} width={100}>
        <GameCard />

        <View>
          <Text
            style={{ ...TYPOGRAPHY.FONT.body, color: TYPOGRAPHY.COLOR.White }}>
            Dungeon Dwarves
          </Text>
          <Text
            style={{
              ...TYPOGRAPHY.FONT.subtitle,
              color: TYPOGRAPHY.COLOR.White,
            }}>
            Role-Playing
          </Text>
        </View>
      </PressableCard>
    </View>
  );
};

export default React.memo(GameLaneCard);
