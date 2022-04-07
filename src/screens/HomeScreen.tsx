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

import defaultImage from '../../assets/images/posters/stranger-things.jpg';
import uuid from 'react-native-uuid';
import InfoBar from '../components/InfoBar';
import { TagMapper } from '../components/TagMapper';
// import { DATA } from '../../assets/MockData/DummyData';
import { Ionicons } from '@expo/vector-icons';
import Lane from '../components/Lane';
import StandardLaneCard from '../components/LaneRenderItems/StandardLaneCard';
// import { OnlyOnNetflix } from '../components/LaneRenderItems/OnlyOnNetflix';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { Dimensions } from 'react-native';

import { useActions } from '../hooks/useActions';
import { IMGSTYLES } from '../global/styles/imgStyles';

import { useSelector } from 'react-redux';
import { RootState } from '../state';
import { FlatList } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const {
    hideMainNav,
    showMainNav,
    showBottomSheet,
    scrollYZeroFalse,
    scrollYZeroTrue,
    fetchMovies,
  } = useActions();
  const movies = useSelector((state: RootState) => state.movies.allMovies);
  const movie = useSelector((state: RootState) => state.movies.singleMovie);

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
    fetchMovies();
  }, []);

  // console.log(movie);

  return (
    <FlatList
      onScroll={handleScroll}
      keyExtractor={() => uuid.v4().toString()}
      data={movies}
      ListHeaderComponent={() => (
        <View style={{ height: 600, position: 'relative' }}>
          <ImageBackground
            source={
              movie.poster || movie.backdrop
                ? { uri: movie.poster || movie.backdrop }
                : defaultImage
            }
            resizeMode='cover'
            style={{ flex: 1 }}>
            <LinearGradient
              colors={[
                'rgba(0,0,0, 0.2)',
                'rgba(0,0,0, 0.2)',
                'rgba(0,0,0,0.3)',
              ]}
              style={[IMGSTYLES.background, { zIndex: 100 }]}
            />
          </ImageBackground>

          <View
            style={{
              marginTop: -40,
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
      )}
      renderItem={({ item }) => {
        return (
          <Lane
            key={uuid.v4().toString()}
            title='Lane'
            data={item}
            LaneRenderItem={StandardLaneCard}
          />
        );
      }}
      ListFooterComponent={() => (
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
      )}
    />
  );
};

export default React.memo(HomeScreen);
