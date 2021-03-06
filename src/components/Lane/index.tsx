import React, { FunctionComponent, useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { IMovieDetailsTransform } from '../../types/data.types';

interface ILane {
  data: IMovieDetailsTransform[] | any[];
  LaneRenderItem: FunctionComponent<any>;
  title: string;
}

const Lane = ({ data, LaneRenderItem, title }: ILane) => {
  const keyExtractor = useCallback(({ id }) => id, []);
  const renderItem = useCallback(({ item }) => {
    return (
      <LaneRenderItem
        image={item.poster || item.backdrop}
        goTo={{ key: 'MovieDetail', params: item }}
      />
    );
  }, []);

  return (
    <View
      style={{
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingVertical: GLOBAL.SPACING.md,
        paddingHorizontal: GLOBAL.SPACING.sm,
        zIndex: 100,
      }}>
      <Text style={TYPOGRAPHY.FONT.h2}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Lane;
