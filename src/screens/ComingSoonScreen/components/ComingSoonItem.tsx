import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';
import { Ionicons } from '@expo/vector-icons';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { IMovieDetailsTransform } from '../../../types/data.types';

const ComingSoonItem = ({ item }: { item: IMovieDetailsTransform }) => {
  const controlRef = useRef<YoutubeIframeRef>(null);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(
    (state: string) => {
      if (state === 'ended') {
        controlRef.current?.seekTo(6.5, true);
        setPlaying(true);
      }
    },
    [playing]
  );

  const videoId = item.trailer ? item.trailer.split('?v=')[1] : 'JfVOs4VSpmA';

  return (
    <View style={styles.container}>
      <View pointerEvents='none' style={styles.videoContainer}>
        <YoutubePlayer
          contentScale={1}
          height={300}
          width={380}
          ref={controlRef}
          mute={true}
          play={playing}
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
      <Pressable onPress={() => {}} style={styles.infoContainer}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, color: TYPOGRAPHY.COLOR.White }}>
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
              <Ionicons name='add' size={28} color={TYPOGRAPHY.COLOR.White} />
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
        <View>
          <Text style={{ color: TYPOGRAPHY.COLOR.White, marginVertical: 5 }}>
            {item?.description?.length > 200
              ? item?.description?.slice(0, 200) + '...'
              : item?.description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
    padding: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoContainer: {
    height: '65%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  infoContainer: {
    width: '100%',
    height: '35%',
    justifyContent: 'space-evenly',
    paddingTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
});

export default React.memo(ComingSoonItem);
