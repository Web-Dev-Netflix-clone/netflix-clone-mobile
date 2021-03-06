import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import banner from '../../../assets/netflix-games/stranger-things-game-bg2.png';
import { GLOBAL } from '../../global/styles/global';

import { LinearGradient } from 'expo-linear-gradient';
import { DATA } from '../../../assets/mock-data/dummyData';
import Lane from '../../components/Lane';
import { TYPOGRAPHY } from '../../global/styles/typography';

import GameLaneCard from '../../components/Lane/LaneRenderItems/GameLaneCard';
import { IMGSTYLES } from '../../global/styles/imgStyles';
import GameCard from './components/GameCard';

const GamesScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingTop: 110,
        }}>
        <View
          style={{
            position: 'relative',
            height: 450,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <ImageBackground
            source={banner}
            resizeMode='stretch'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              height: '100%',
              width: '100%',
              borderRadius: 20,
            }}
          />
          <LinearGradient
            colors={['rgba(0,0,0, .2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0,0.2)']}
            style={{ ...IMGSTYLES.background, zIndex: 0 }}
          />
          <GameCard height={150} width={150} />

          <View
            style={{
              alignItems: 'center',
              paddingBottom: GLOBAL.SPACING.sm,
            }}>
            <Text style={TYPOGRAPHY.FONT.h2}>Dungeon Dwarves</Text>
            <View style={GLOBAL.LAYOUT.rowCenter}>
              <Text
                style={{
                  ...TYPOGRAPHY.FONT.subtitle,
                  marginBottom: 0,
                  color: TYPOGRAPHY.COLOR.White,
                }}>
                Role-Playing
              </Text>
              <Image
                style={styles.icon}
                source={require('../../../assets/kijkwijzer-icons/12.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
      <Lane
        title='All Mobile Games'
        data={DATA}
        LaneRenderItem={GameLaneCard}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Black,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginHorizontal: GLOBAL.SPACING.sm,
  },
});

export default GamesScreen;
