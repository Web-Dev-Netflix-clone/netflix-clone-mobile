import React from 'react';
import { View, ImageBackground, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';

import image from '../../assets/images/posters/stranger-things.jpg';
import InfoBar from '../components/InfoBar';
import { TagMapper } from '../components/TagMapper';
import { DATA } from '../../assets/MockData/DummyData';
import { Ionicons } from '@expo/vector-icons';
import Lane from '../components/Lane';
import { StandardLaneCard } from '../components/LaneRenderItems/StandardLaneCard';
import { OnlyOnNetflix } from '../components/LaneRenderItems/OnlyOnNetflix';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetRenderContent from '../components/BottomSheet';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  // DIMENONSIONS API GEBRUIKEN => voor height?!
  // https://github.com/gorhom/react-native-portal
  // https://github.com/gorhom/react-native-bottom-sheet/issues/249

  const sheetRef = React.useRef(null);
  const route = useRoute();

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
      <Lane title='Only On Netflix' data={DATA} renderItem={OnlyOnNetflix} />

      <View
        style={{
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingBottom: GLOBAL.SPACING.lg,
        }}>
        <Ionicons
          name='shuffle'
          size={36}
          color={TYPOGRAPHY.COLOR.RedPrimary}
        />
        <Text style={[TYPOGRAPHY.FONT.h2, { color: TYPOGRAPHY.COLOR.White }]}>
          Not sure what to watch?
        </Text>

        <Text style={TYPOGRAPHY.FONT.subtitle}>
          We'll shuffle everything based on Netflix and find things for you to
          watch based on your tastes
        </Text>
        <Button
          style={{
            backgroundColor: '#fff',
            width: '50%',
          }}
          icon='shuffle'
          color='#000'
          onPress={() => {
            console.log('ROUTE PARAMS', route);
            route.params.showTab('none');
            sheetRef?.current.snapTo(0);
          }}>
          Play Something
        </Button>
        <BottomSheet
          ref={sheetRef}
          // initialSnap={0}
          onCloseEnd={() => {
            route.params.showTab('flex');
          }}
          snapPoints={[200, 300, -20]}
          borderRadius={0}
          renderContent={BottomSheetRenderContent}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
