import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
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

import { useActions } from '../hooks/useActions';
import { IMGSTYLES } from '../global/styles/imgStyles';
import axios from 'axios';

const HomeScreen = () => {
  const {
    hideMainNav,
    showMainNav,
    showBottomSheet,
    scrollYZeroFalse,
    scrollYZeroTrue,
  } = useActions();

  const [offset, setOffSet] = useState(0);
  const windowHeight = Dimensions.get('window').height;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > offset ? 'down' : 'up';
    setOffSet(currentOffset);

    if (currentOffset < 600) scrollYZeroTrue();
    if (currentOffset !== 0) scrollYZeroFalse();
    if (direction === 'up') showMainNav();
    if (direction === 'down' && currentOffset > 75) hideMainNav();
  };

  useEffect(() => {
    // console.log('inside the effect');
    const requestMovies = async () => {
      try {
        const response = await axios.get(
          'https://afternoon-oasis-79606.herokuapp.com/discover'
        );

        const data = response.data;

        const allMovies = data.reduce((acc: any, curr: any, index: number) => {
          if (index) return acc.concat(curr.results);

          return acc;
        }, []);

        // console.log('ALL', allMovies);
      } catch (error) {
        console.log(error);
      }
    };

    requestMovies();
  }, []);

  return (
    <ScrollView
      style={{ position: 'relative' }}
      onScroll={handleScroll}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ height: 600, position: 'relative' }}>
        <ImageBackground source={image} resizeMode='cover' style={{ flex: 1 }}>
          <LinearGradient
            colors={['rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0,0.3)']}
            style={[IMGSTYLES.background, { zIndex: 100 }]}
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
        LaneRenderItem={StandardLaneCard}
      />
      <Lane
        title='Only On Netflix'
        data={DATA}
        LaneRenderItem={OnlyOnNetflix}
      />

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
        <Text style={TYPOGRAPHY.FONT.h2}>Not sure what to watch?</Text>

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
            showBottomSheet();
          }}>
          Play Something
        </Button>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
