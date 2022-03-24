import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, ViewStyle, StyleSheet, ImageBackground } from 'react-native';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';
import { Icon } from 'react-native-elements';
import Animated, { BounceIn, Easing, Layout } from 'react-native-reanimated';

import { IMGSTYLES } from '../global/styles/imgStyles';

interface IMovieDetailsScreen {
  style: ViewStyle;
}

const MovieDetailsScreen = ({ style }: IMovieDetailsScreen) => {
  const [playing, setPlaying] = useState(true);
  const [isMute, setMute] = useState(false);
  const [showVideo, setShowVideo] = useState(-150);
  const [videoHeight, setVideoHeight] = useState(0);

  const controlRef = useRef<YoutubeIframeRef>();

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(100);
      setVideoHeight(300);
    }, 5200);
  }, []);

  const onStateChange = (state: any) => {
    if (state === 'ended') {
      setPlaying(false);
    }
    if (state !== 'playing') {
      setPlaying(false);
    }
  };

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  const seekBackAndForth = (control: string) => {
    console.log('currentTime');
    controlRef.current?.getCurrentTime().then((currentTime) => {
      control === 'forward'
        ? controlRef.current?.seekTo(currentTime + 15, true)
        : controlRef.current?.seekTo(currentTime - 15, true);
    });
  };

  const muteVideo = () => setMute(!isMute);

  const ControlIcon = ({
    name,
    onPress,
  }: {
    name: string;
    onPress: () => void;
  }) => <Icon onPress={onPress} name={name} size={40} color='#fff' />;

  const image = { uri: 'https://reactjs.org/logo-og.png' };

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
          play={true}
          mute={true}
          videoId={'JfVOs4VSpmA'}
          // onChangeState={onStateChange}
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

      {/* <View style={styles.controlContainer}>
        <ControlIcon
          onPress={() => seekBackAndForth('rewind')}
          name='skip-previous'
        />
        <ControlIcon
          onPress={togglePlaying}
          name={playing ? 'pause' : 'play-arrow'}
        />
        <ControlIcon
          onPress={() => seekBackAndForth('forward')}
          name='skip-next'
        />
      </View> */}
      {/* <ControlIcon
        onPress={muteVideo}
        name={isMute ? 'volume-up' : 'volume-off'}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default MovieDetailsScreen;
