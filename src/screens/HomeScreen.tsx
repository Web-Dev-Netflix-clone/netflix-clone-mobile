import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';

import image from '../../assets/images/posters/stranger-things.jpg';
import InfoBar from '../components/InfoBar';
import { PressableCard } from '../components/PressableCard';
import { TagMapper } from '../components/TagMapper';
import { DATA } from '../../assets/MockData/DummyData';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

const HomeScreen = () => {
  const renderItem = ({ item }: { item: any }) => (
    <PressableCard
      background={image}
      onClick={() => console.log('click')}
      title={item.title}
      height={200}
      width={150}
    />
  );

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

      <View
        style={[
          {
            backgroundColor: TYPOGRAPHY.COLOR.Black,
            paddingVertical: GLOBAL.SPACING.md,
          },
        ]}>
        <Text style={[TYPOGRAPHY.FONT.h2, { color: '#FFF' }]}>
          Top 10 in the Netherlands Today
        </Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View
        style={[
          {
            backgroundColor: TYPOGRAPHY.COLOR.Black,
            paddingVertical: GLOBAL.SPACING.md,
          },
        ]}>
        <Text style={[TYPOGRAPHY.FONT.h2, { color: '#FFF' }]}>
          Top 10 in the Netherlands Today
        </Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View
        style={[
          {
            backgroundColor: TYPOGRAPHY.COLOR.Black,
            paddingVertical: GLOBAL.SPACING.md,
          },
        ]}>
        <Text style={[TYPOGRAPHY.FONT.h2, { color: '#FFF' }]}>
          Top 10 in the Netherlands Today
        </Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
