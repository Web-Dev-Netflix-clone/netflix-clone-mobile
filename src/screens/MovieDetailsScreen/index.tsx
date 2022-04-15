import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

import PressableCard from '../../components/PressableCard';

import { TYPOGRAPHY } from '../../global/styles/typography';
import { GLOBAL } from '../../global/styles/global';

import { Button } from 'react-native-paper';
import CustomYoutubePlayer from './components/CustomYoutubePlayer';
import PillTag from './components/PillTag';
import PressableIconBox from '../../components/PressableIconBox';
import { movieGridData } from '../../../assets/mock-data/movieGridData';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MovieDetailsScreen = () => {
  const [playing, setPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);
  const [showVideo, setShowVideo] = useState(-150);
  const [videoHeight, setVideoHeight] = useState(0);

  const { params } = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  const { title, trailer, description } = params;

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      setShowVideo(100);
      setVideoHeight(300);
      setIsMute(!isMute);
    }, 5400);

    () => clearTimeout(unsubscribe);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 60, left: 15 }}>
        <Ionicons
          name={'arrow-back'}
          size={26}
          color={TYPOGRAPHY.COLOR.White}
          style={{ marginLeft: 10 }}
        />
      </Pressable>
      <CustomYoutubePlayer
        playing={playing}
        setPlaying={setPlaying}
        isMute={isMute}
        setIsMute={setIsMute}
        showVideo={showVideo}
        videoHeight={videoHeight}
        trailerSrc={trailer}
      />
      <ScrollView>
        <Text style={TYPOGRAPHY.FONT.h1}>{title}</Text>
        <View
          style={{
            ...GLOBAL.LAYOUT.rowCenter,
            width: '34%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...TYPOGRAPHY.FONT.body,
              marginBottom: 0,
              color: TYPOGRAPHY.COLOR.GreyLight,
            }}>
            2012
          </Text>
          <Image
            style={styles.icon}
            source={require('../../../assets/kijkwijzer-icons/12.jpg')}
          />
          <Text
            style={{
              ...TYPOGRAPHY.FONT.body,
              marginBottom: 0,
              color: TYPOGRAPHY.COLOR.GreyLight,
            }}>
            2h 16m
          </Text>
        </View>
        <View
          style={{
            paddingVertical: GLOBAL.SPACING.md,
            justifyContent: 'space-between',
          }}>
          <Button
            style={{
              backgroundColor: TYPOGRAPHY.COLOR.White,
              marginBottom: GLOBAL.SPACING.xsm,
            }}
            uppercase={false}
            icon='play'
            color={TYPOGRAPHY.COLOR.Black}
            onPress={() => {}}>
            Play
          </Button>
          <Button
            style={{ backgroundColor: TYPOGRAPHY.COLOR.DarkSecondary }}
            uppercase={false}
            icon='download'
            color={TYPOGRAPHY.COLOR.White}
            onPress={() => {}}>
            Download
          </Button>
        </View>

        <View>
          <Text
            style={{
              ...TYPOGRAPHY.FONT.subtitle,
              color: TYPOGRAPHY.COLOR.White,
            }}>
            {description}
          </Text>
        </View>

        <PillTag
          iconName={'thumbs-up-sharp'}
          backgroundColor={TYPOGRAPHY.COLOR.RedPrimary}
          text={'Most liked'}
          style={{ marginTop: GLOBAL.SPACING.sm }}
        />
        <View
          style={{
            ...GLOBAL.LAYOUT.rowCenter,
            backgroundColor: 'transparent',
            width: '70%',
            justifyContent: 'space-evenly',
            paddingVertical: GLOBAL.SPACING.md,
          }}>
          <PressableIconBox
            iconName={'add-sharp'}
            text='My List'
            onClick={() => {}}
          />
          <PressableIconBox
            iconName={'md-thumbs-up-outline'}
            text='Rate'
            onClick={() => {}}
          />
          <PressableIconBox
            iconName={'share-social-sharp'}
            text='Share'
            onClick={() => {}}
          />
        </View>

        <View>
          <Text style={TYPOGRAPHY.FONT.body}>MORE LIKE THIS</Text>
          <View style={GLOBAL.LAYOUT.imageGrid}>
            {movieGridData.map(({ id, source }) => {
              return (
                <PressableCard
                  key={id}
                  background={source}
                  wrapperWidth='30%'
                  width='100%'
                  height={200}
                  cardRadius={0}
                  style={{ backgroundColor: TYPOGRAPHY.COLOR.Transparent }}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
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
});

export default MovieDetailsScreen;
