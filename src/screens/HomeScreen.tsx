import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import image from '../../assets/images/posters/stranger-things.jpg';
import { TagMapper } from '../components/TagMapper';

const HomeScreen = () => {
  return (
    <View style={[GLOBAL.LAYOUT.container]}>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={{ flex: 0.65 }}
      />
      <View
        style={{
          marginTop: -25,
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
    </View>
  );
};

export default HomeScreen;
