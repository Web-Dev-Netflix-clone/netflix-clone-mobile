import React, { useEffect, useState } from 'react';
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

import InfoBar from './components/InfoBar';
import { TagMapper } from './components/TagMapper';

import { Ionicons } from '@expo/vector-icons';
import Lane from '../../components/Lane';
import StandardLaneCard from '../../components/Lane/LaneRenderItems/StandardLaneCard';

import { TYPOGRAPHY } from '../../global/styles/typography';
import { GLOBAL } from '../../global/styles/global';

import { useActions } from '../../hooks/useActions';
import { IMGSTYLES } from '../../global/styles/imgStyles';

import { useSelector } from 'react-redux';

import { movieTags } from '../../../assets/mock-data/movieTags';
import {
  selectAllMovies,
  selectHeroMovie,
} from '../../state/selectors/selectors';

const HomeScreen = () => {
  const {
    hideMainNav,
    showMainNav,
    showBottomSheet,
    scrollYZeroFalse,
    scrollYZeroTrue,
    fetchMovieDetails,
  } = useActions();
  const movies = useSelector(selectAllMovies);
  const movie = useSelector(selectHeroMovie);

  useEffect(() => {
    fetchMovieDetails(movie.id);
  }, [movie.id]);

  const [offset, setOffSet] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > offset ? 'down' : 'up';
    setOffSet(currentOffset);

    if (currentOffset < 300) scrollYZeroTrue();
    if (currentOffset !== 0) scrollYZeroFalse();
    if (direction === 'up') showMainNav();
    if (direction === 'down' && currentOffset > 75) hideMainNav();
  };

  return (
    <ScrollView
      style={{ position: 'relative' }}
      onScroll={handleScroll}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ height: 600, position: 'relative' }}>
        <ImageBackground
          source={
            movie?.posterHighRes || movie?.backdropHighRes
              ? { uri: movie.posterHighRes || movie.backdropHighRes }
              : {
                  uri: 'https://image.tmdb.org/t/p/original/8i1xFqcItT6GKEbY6VDbFnxe7sJ.jpg',
                }
          }
          resizeMode='cover'
          style={{ flex: 1 }}>
          <LinearGradient
            colors={['rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0,0.3)']}
            style={{ ...IMGSTYLES.background, zIndex: 100 }}
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
            tags={movieTags}
            symbol={'•'}
            tagColor={TYPOGRAPHY.COLOR.White}
            symbolColor='gold'
          />
        </View>
        <InfoBar />
      </View>

      {movies?.map(({ genre, movies }: any) => {
        if (genre === 'Actor') {
          return (
            <Lane
              key={genre}
              title={'Will Smith'}
              data={movies}
              LaneRenderItem={StandardLaneCard}
            />
          );
        }

        return (
          <Lane
            key={genre}
            title={genre}
            data={movies}
            LaneRenderItem={StandardLaneCard}
          />
        );
      })}

      <View
        style={{
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingBottom: GLOBAL.SPACING.lg,
          paddingHorizontal: GLOBAL.SPACING.xsm,
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
            backgroundColor: TYPOGRAPHY.COLOR.White,
            width: '50%',
          }}
          icon='shuffle'
          color={TYPOGRAPHY.COLOR.Black}
          onPress={() => {
            showBottomSheet();
          }}>
          Play Something
        </Button>
      </View>
    </ScrollView>
  );
};

export default React.memo(HomeScreen);
