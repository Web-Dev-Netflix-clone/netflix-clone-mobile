import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { GLOBAL } from '../global/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { TYPOGRAPHY } from '../global/styles/typography';
import image from '../../assets/images/posters/stranger-things.jpg';
import { TagMapper } from '../components/TagMapper';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={{ flex: 0.65 }}
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingVertical: GLOBAL.SPACING.sm,
          backgroundColor: TYPOGRAPHY.COLOR.BlackSecondary,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Ionicons name='add' size={30} color={TYPOGRAPHY.COLOR.White} />
          <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZES.sm, color: '#fff' }}>
            My List
          </Text>
        </View>
        <Button
          style={{ backgroundColor: '#fff' }}
          icon='play'
          color='#000'
          onPress={() => console.log('Pressed')}>
          Play
        </Button>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Ionicons
            name='information-circle-outline'
            size={30}
            color={TYPOGRAPHY.COLOR.White}
          />
          <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZES.sm, color: '#fff' }}>
            Info
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
