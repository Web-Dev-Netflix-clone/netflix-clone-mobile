import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  ViewStyle,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { TYPOGRAPHY } from '../global/styles/typography';
import { ScrollView } from 'react-native-gesture-handler';
import { GLOBAL } from '../global/styles/global';

import { Button } from 'react-native-paper';
import CustomYoutubePlayer from '../components/CustomYoutubePlayer';
import PillTag from '../components/PillTag';

interface IMovieDetailsScreen {
  style: ViewStyle;
}

const MovieDetailsScreen = ({ style }: IMovieDetailsScreen) => {
  const [playing, setPlaying] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const [showVideo, setShowVideo] = useState(-150);
  const [videoHeight, setVideoHeight] = useState(0);

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
      <CustomYoutubePlayer
        playing={playing}
        setPlaying={setPlaying}
        isMute={isMute}
        setIsMute={setIsMute}
        showVideo={showVideo}
        videoHeight={videoHeight}
      />
      <ScrollView>
        <Text style={[TYPOGRAPHY.FONT.h1, { color: '#fff' }]}>
          The Amazing Spider-Man
        </Text>
        <View
          style={[
            GLOBAL.LAYOUT.rowCenter,
            {
              width: '34%',
              justifyContent: 'space-between',
            },
          ]}>
          <Text
            style={[
              TYPOGRAPHY.FONT.body,
              { marginBottom: 0, color: TYPOGRAPHY.COLOR.GreyLight },
            ]}>
            2012
          </Text>
          <Image
            style={styles.icon}
            source={require('../../assets/kijkwijzer-icons/12.jpg')}
          />
          <Text
            style={[
              TYPOGRAPHY.FONT.body,
              { marginBottom: 0, color: TYPOGRAPHY.COLOR.GreyLight },
            ]}>
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
              backgroundColor: '#fff',
              marginBottom: GLOBAL.SPACING.xsm,
            }}
            uppercase={false}
            icon='play'
            color='#000'
            onPress={() => console.log('Pressed')}>
            Play
          </Button>
          <Button
            style={{ backgroundColor: TYPOGRAPHY.COLOR.DarkSecondary }}
            uppercase={false}
            icon='download'
            color='#fff'
            onPress={() => console.log('Pressed')}>
            Download
          </Button>
        </View>

        <View>
          <Text style={[TYPOGRAPHY.FONT.subtitle, { color: '#fff' }]}>
            In this reboot of the superhero franchise, high schooler Peter
            Parker learns to wield his newfound powers while facing down
            arch-villain The Lizard.
          </Text>
        </View>

        <PillTag
          iconName={'thumbs-up-sharp'}
          backgroundColor={TYPOGRAPHY.COLOR.RedPrimary}
          text={'Most liked'}
        />
        <View
          style={[
            GLOBAL.LAYOUT.rowCenter,
            {
              backgroundColor: 'transparent',
              width: '70%',
              justifyContent: 'space-evenly',
            },
          ]}>
          <View
            style={[
              {
                paddingVertical: GLOBAL.SPACING.md,
                marginLeft: GLOBAL.SPACING.md,

                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Ionicons
              style={{ marginBottom: 5 }}
              name='add-sharp'
              size={30}
              color={TYPOGRAPHY.COLOR.White}
            />
            <Text style={[TYPOGRAPHY.FONT.subtitle]}>My List</Text>
          </View>
          <View
            style={[
              {
                paddingVertical: GLOBAL.SPACING.md,
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Ionicons
              style={{ marginBottom: 5 }}
              name='md-thumbs-up-outline'
              size={30}
              color={TYPOGRAPHY.COLOR.White}
            />
            <Text style={[TYPOGRAPHY.FONT.subtitle]}>Rate</Text>
          </View>
          <View
            style={[
              {
                paddingVertical: GLOBAL.SPACING.md,
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Ionicons
              style={{ marginBottom: 5 }}
              name='share-social-sharp'
              size={30}
              color={TYPOGRAPHY.COLOR.White}
            />
            <Text style={[TYPOGRAPHY.FONT.subtitle]}>Share</Text>
          </View>
        </View>

        <View>
          <Text style={TYPOGRAPHY.FONT.body}>MORE LIKE THIS</Text>
          <View
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              backgroundColor: 'transparent',
              justifyContent: 'space-evenly',
              paddingVertical: GLOBAL.SPACING.md,
            }}>
            <View style={{ width: '30%' }}>
              <ImageBackground
                source={{
                  uri: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/140219-tv-news-feature-netflix-tips-and-tricks-how-to-master-your-binge-watching-experience-image4-rivlhfwq6o-jpg.webp?v1',
                }}
                style={{ width: '100%', height: 200 }}
              />
            </View>
            <View style={{ width: '30%' }}>
              <ImageBackground
                source={{
                  uri: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/140219-tv-news-feature-netflix-tips-and-tricks-how-to-master-your-binge-watching-experience-image4-rivlhfwq6o-jpg.webp?v1',
                }}
                style={{ width: '100%', height: 200 }}
              />
            </View>
            <View style={{ width: '30%' }}>
              <ImageBackground
                source={{
                  uri: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/140219-tv-news-feature-netflix-tips-and-tricks-how-to-master-your-binge-watching-experience-image4-rivlhfwq6o-jpg.webp?v1',
                }}
                style={{ width: '100%', height: 200 }}
              />
            </View>
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
