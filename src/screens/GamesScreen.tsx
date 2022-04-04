import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { GLOBAL } from '../global/styles/global';
import banner from '../../assets/netflix-games/stranger-things-game-bg2.png';
import card from '../../assets/netflix-games/dungeon-dwarves-card.jpg';
import { TYPOGRAPHY } from '../global/styles/typography';
import { LinearGradient } from 'expo-linear-gradient';
import Lane from '../components/Lane';
import { DATA } from '../../assets/MockData/DummyData';
import { StandardLaneCard } from '../components/LaneRenderItems/StandardLaneCard';
import { GameCard } from '../components/LaneRenderItems/GameCard';

const GamesScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: '#000',
            paddingTop: 110,
          },
        ]}>
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
            style={[styles.background, { zIndex: 0 }]}
          />
          <View
            style={{
              borderRadius: 20,
              height: 150,
              width: 150,
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
                  color: '#fff',
                }}>
                Role-Playing
              </Text>
              <Image
                style={styles.icon}
                source={require('../../assets/kijkwijzer-icons/12.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
      <Lane title='All Mobile Games' data={DATA} LaneRenderItem={GameCard} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginHorizontal: GLOBAL.SPACING.sm,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});

export default GamesScreen;
