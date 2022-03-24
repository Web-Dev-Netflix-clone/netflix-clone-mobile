import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

interface ILane {
  data: any;
  renderItem: any;
  title: string;
}

const Lane = ({ data, renderItem, title }: ILane) => {
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
        renderItem={renderItem}
        keyExtractor={(item) => (item.id ? item.id : Math.random())}
      />
    </View>
  );
};

export default Lane;
