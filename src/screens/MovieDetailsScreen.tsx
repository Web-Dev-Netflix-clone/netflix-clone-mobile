import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';
import { Ionicons } from '@expo/vector-icons';
import Animated, { BounceIn, Easing, Layout } from 'react-native-reanimated';

import { IMGSTYLES } from '../global/styles/imgStyles';
import { TYPOGRAPHY } from '../global/styles/typography';
import { ScrollView } from 'react-native-gesture-handler';
import { GLOBAL } from '../global/styles/global';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import { Button } from 'react-native-paper';

interface IMovieDetailsScreen {
  style: ViewStyle;
}

const MovieDetailsScreen = ({ style }: IMovieDetailsScreen) => {
  const [playing, setPlaying] = useState(true);
  const [isMute, setMute] = useState(true);
  const [showVideo, setShowVideo] = useState(-150);
  const [videoHeight, setVideoHeight] = useState(0);

  const controlRef = useRef<YoutubeIframeRef>();

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      setShowVideo(100);
      setVideoHeight(300);
      setMute(!isMute);
    }, 5000);

    () => unsubscribe;
  }, []);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      controlRef.current?.seekTo(6.5, true);
      setPlaying(true);
      setMute(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const seekBackAndForth = (control: string) => {
    console.log('currentTime');
    controlRef.current?.getCurrentTime().then((currentTime) => {
      control === 'forward'
        ? controlRef.current?.seekTo(currentTime + 15, true)
        : controlRef.current?.seekTo(currentTime - 15, true);
    });
  };

  const muteVideo = () => setMute(!isMute);

  return (
    <View style={styles.container}>
      <Animated.View
        entering={BounceIn}
        layout={Layout.easing(Easing.ease).delay(3000)}
        style={{
          height: 350,
          backgroundColor: '#000',
          zIndex: -1,
        }}
        pointerEvents='none'>
        {showVideo < 0 && (
          <ImageBackground
            source={{
              uri: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/140219-tv-news-feature-netflix-tips-and-tricks-how-to-master-your-binge-watching-experience-image4-rivlhfwq6o-jpg.webp?v1',
            }}
            style={IMGSTYLES.responsive}
          />
        )}

        <YoutubePlayer
          webViewStyle={{
            marginTop: showVideo,
          }}
          height={videoHeight}
          contentScale={1}
          //@ts-ignore
          ref={controlRef}
          play={playing}
          mute={true}
          videoId={'JfVOs4VSpmA'}
          onChangeState={onStateChange}
          initialPlayerParams={{
            loop: true,
            controls: false,
            modestbranding: false,
            showClosedCaptions: false,
            start: 0,
            rel: false,
          }}
          forceAndroidAutoplay={true}
        />
      </Animated.View>
      {showVideo > 0 && (
        <Ionicons
          style={{ position: 'absolute', top: 265, right: 10 }}
          name={isMute ? 'volume-mute' : 'volume-mute'}
          size={15}
          color='white'
          onPress={muteVideo}
        />
      )}
      <ScrollView>
        <Text style={[TYPOGRAPHY.FONT.h1, { color: '#fff' }]}>
          The Amazing Spider-Man
        </Text>
        <View
          style={[
            GLOBAL.LAYOUT.rowCenter,
            { width: '34%', justifyContent: 'space-between' },
          ]}>
          <Text style={[TYPOGRAPHY.FONT.body]}>2012</Text>
          <Text
            style={[
              {
                fontSize: 12,
                fontFamily: 'netflix-sans-bold',
                color: '#fff',
                borderRadius: 25,
                textAlign: 'center',
                borderWidth: 2,
                borderColor: '#fff',
                padding: 2,
              },
            ]}>
            12
          </Text>
          <Text style={[TYPOGRAPHY.FONT.body]}>2h 16m</Text>
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
        <View
          style={[
            GLOBAL.LAYOUT.rowCenter,
            {
              width: '27%',
              backgroundColor: TYPOGRAPHY.COLOR.RedPrimary,
              borderRadius: 20,
              padding: 4,
              justifyContent: 'space-evenly',
            },
          ]}>
          <Ionicons color={'#fff'} name={'thumbs-up-sharp'} size={12} />
          <Text
            style={[TYPOGRAPHY.FONT.body, { marginBottom: 0, fontSize: 12 }]}>
            Most Liked
          </Text>
        </View>
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
});

export default MovieDetailsScreen;
