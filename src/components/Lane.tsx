import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

interface ILane {
  data: any;
  LaneRenderItem: any;
  title: string;
}

const Lane = ({ data, LaneRenderItem, title }: ILane) => {
  return (
    <View
      style={[
        {
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingVertical: GLOBAL.SPACING.md,
        },
      ]}>
      <Text style={[TYPOGRAPHY.FONT.h2, { color: '#FFF' }]}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={(item) => <LaneRenderItem goTo={'MovieDetail'} />}
        keyExtractor={(item) => (item.id ? item.id : Math.random())}
      />
    </View>
  );
};

export default Lane;
