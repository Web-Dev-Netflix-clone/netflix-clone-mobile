//@ts-nocheck
import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  Animated,
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
import Constants from 'expo-constants';
import DiscoverNav from '../components/DiscoverNav';

const HomeScreen = () => {
  // DIMENONSIONS API GEBRUIKEN => voor height?!
  // https://github.com/gorhom/react-native-portal
  // https://github.com/gorhom/react-native-bottom-sheet/issues/249
  // https://dev.to/jeff_codes/react-native-custom-bottombar-navigation-with-bottomsheet-1ep9

  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  // console.log(Constants.statusBarHeight);

  return (
    <ScrollView
      style={{ position: 'relative' }}
      onScroll={(event) => {
        const offSetY = event.nativeEvent.contentOffset.y;
        scrollY.setValue(offSetY);
        // console.log(offSetY);
      }}
      contentContainerStyle={{ flexGrow: 1 }}>
      <DiscoverNav
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 60,
          zIndex: 100,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      />
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
