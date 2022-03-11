import React from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';

import image from '../../assets/images/posters/stranger-things.jpg';
import InfoBar from '../components/InfoBar';
import { TagMapper } from '../components/TagMapper';
import { DATA } from '../../assets/MockData/DummyData';

import Lane from '../components/Lane';
import { StandardLaneCard } from '../components/LaneRenderItems/StandardLaneCard';

const HomeScreen = () => {
  // DIMENONSIONS API GEBRUIKEN => voor height?!

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ height: 600 }}>
        <ImageBackground
          source={image}
          resizeMode='cover'
          style={{ flex: 1 }}
        />
        <View
          style={{
            marginTop: -28,
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
      <Lane
        title='Top 10 in the Netherlands Today'
        data={DATA}
        renderItem={StandardLaneCard}
      />
    </ScrollView>
  );
};

export default HomeScreen;
