import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Ionicons } from '@expo/vector-icons';

const ComingSoonItem = ({ item }: any) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={300}
          width={380}
          play={playing}
          videoId={item.item.videoId}
          onChangeState={onStateChange}
          mute={true}
          initialPlayerParams={{ modestbranding: true, rel: true }}
        />
      </View>
      <Pressable
        onPress={() => console.log('more info')}
        style={styles.infoContainer}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, color: 'white' }}>
            {item.item.title}
          </Text>
          <View style={styles.iconContainer}>
            <View style={{ alignItems: 'center' }}>
              <Ionicons name='share-social-outline' size={28} color='white' />
              <Text>Share</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Ionicons name='add' size={28} color='white' />
              <Text>My List</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Ionicons name='play-circle' size={28} color='white' />
              <Text>Play</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: 'white', marginVertical: 5 }}>
            {item.item.description}
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
