import React from 'react';

import { Text, View } from 'react-native';

import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import GameCard from '../../../screens/GamesScreen/components/GameCard';
import PressableCard from '../../PressableCard';

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
