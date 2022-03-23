//@ts-nocheck
import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import image from '../../assets/images/posters/stranger-things.jpg';
import InfoBar from '../components/InfoBar';
import { TagMapper } from '../components/TagMapper';
import { DATA } from '../../assets/MockData/DummyData';
import { Ionicons } from '@expo/vector-icons';
import Lane from '../components/Lane';
import { StandardLaneCard } from '../components/LaneRenderItems/StandardLaneCard';
import { OnlyOnNetflix } from '../components/LaneRenderItems/OnlyOnNetflix';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { Dimensions } from 'react-native';

import Constants from 'expo-constants';

import { useActions } from '../hooks/useActions';

const HomeScreen = () => {
  const { hideMainNav, showMainNav } = useActions();
  const [offset, setOffSet] = useState();
  const windowHeight = Dimensions.get('window').height;

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > offset ? 'down' : 'up';
    setOffSet(currentOffset);

    if (direction === 'up') showMainNav();
    if (direction === 'down' && currentOffset > 65) hideMainNav();
  };

  return (
    <ScrollView
      style={{ position: 'relative' }}
      onScroll={handleScroll}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ height: 600, position: 'relative' }}>
        <ImageBackground source={image} resizeMode='cover' style={{ flex: 1 }}>
          <LinearGradient
            colors={['rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0,0.3)']}
            style={[styles.background, { zIndex: 100 }]}
          />
        </ImageBackground>
        <View
          style={{
            marginTop: -28,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}>
          <TagMapper
            tags={['Explosive', 'Exciting', 'Action', 'Drama', 'Horror']}
            symbol={'•'}
            tagColor='#fff'
            symbolColor='gold'
          />
        </View>
        <InfoBar />
      </View>
      <Lane
        title='Top 10 in the Netherlands Today'
        data={DATA}
        renderItem={StandardLaneCard}
      />
      <Lane title='Only On Netflix' data={DATA} renderItem={OnlyOnNetflix} />

      <View
        style={{
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingBottom: GLOBAL.SPACING.lg,
        }}>
        <Ionicons
          name='shuffle'
          size={36}
          color={TYPOGRAPHY.COLOR.RedPrimary}
        />
        <Text style={[TYPOGRAPHY.FONT.h2, { color: TYPOGRAPHY.COLOR.White }]}>
          Not sure what to watch?
        </Text>

        <Text style={TYPOGRAPHY.FONT.subtitle}>
          We'll shuffle everything based on Netflix and find things for you to
          watch based on your tastes
        </Text>
        <Button
          style={{
            backgroundColor: '#fff',
            width: '50%',
          }}
          icon='shuffle'
          color='#000'
          onPress={() => {
            console.log('Press');
          }}>
          Play Something
        </Button>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
