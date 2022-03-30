import React, { FunctionComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

interface ILane {
  data: { id: string; title: string }[];
  LaneRenderItem: FunctionComponent<any>;
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
        renderItem={() => <LaneRenderItem goTo={'MovieDetail'} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Lane;
