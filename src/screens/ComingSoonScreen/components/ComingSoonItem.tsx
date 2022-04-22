import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';
import VisibilitySensor from '../../../components/VisibilitySensor';
import { IMGSTYLES } from '../../../global/styles/imgStyles';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { IMovieDetailsTransform } from '../../../types/data.types';

const { height, width } = Dimensions.get('window');

const ComingSoonItem = ({ item }: { item: IMovieDetailsTransform }) => {
  const [viewVisible, setViewVisible] = useState(false);

  const controlRef = useRef<YoutubeIframeRef>(null);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(
    (state: string) => {
      if (state === 'ended') {
        controlRef.current?.seekTo(6.5, true);
        // setPlaying(true);
      }
    },
    [playing]
  );

  useEffect(() => {
    return () => {
      setViewVisible(false);
    };
  }, [viewVisible]);

  const videoId = item.trailer ? item.trailer.split('?v=')[1] : 'JfVOs4VSpmA';

  return (
    <>
      <VisibilitySensor
        onChange={() => {
          setViewVisible(!viewVisible);
        }}>
        {!viewVisible ? (
          <LinearGradient
            colors={['rgba(0,0,0, .8)', 'rgba(0,0,0, 0.8)', 'rgba(0,0,0,0.6)']}
            style={{ ...IMGSTYLES.background, zIndex: 100 }}
          />
        ) : null}
        <View style={styles.container}>
          <View pointerEvents='none' style={styles.videoContainer}>
            <YoutubePlayer
              contentScale={1}
              height={300}
              width={380}
              ref={controlRef}
              mute={true}
              play={false}
              videoId={videoId}
              onChangeState={onStateChange}
              initialPlayerParams={{
                loop: true,
                controls: false,
                modestbranding: false,
                showClosedCaptions: false,
                start: 0,
                rel: false,
              }}
              forceAndroidAutoplay={false}
            />
          </View>
          <View style={styles.infoContainer}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={styles.header}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
                    color: TYPOGRAPHY.COLOR.White,
                    fontSize: TYPOGRAPHY.FONT_SIZES.lg,
                    width: '50%',
                  }}>
                  {item.title}
                </Text>
                <View style={styles.iconContainer}>
                  <View style={{ alignItems: 'center' }}>
                    <Ionicons
                      name='share-social-outline'
                      size={28}
                      color={TYPOGRAPHY.COLOR.White}
                    />
                    <Text>Share</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Ionicons
                      name='add'
                      size={28}
                      color={TYPOGRAPHY.COLOR.White}
                    />
                    <Text>My List</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Ionicons
                      name='play-circle'
                      size={28}
                      color={TYPOGRAPHY.COLOR.White}
                    />
                    <Text>Play</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  ...TYPOGRAPHY.FONT.body,
                  fontSize: TYPOGRAPHY.FONT_SIZES.sm,
                  color: TYPOGRAPHY.COLOR.GreyLight,
                }}>
                {item.description.length > 200
                  ? item.description.slice(0, 200) + '...'
                  : item.description}
              </Text>
            </View>
          </View>
        </View>
      </VisibilitySensor>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height * 0.4,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoContainer: {
    height: '60%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  infoContainer: {
    height: '40%',
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
  },
});

export default React.memo(ComingSoonItem);
