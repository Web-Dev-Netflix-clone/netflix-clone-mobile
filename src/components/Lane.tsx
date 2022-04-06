import React, { FunctionComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { IMovie } from '../state/actionsInterfaces/moviesInterfaces';

interface ILane {
  data: IMovie[];
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
      <Text style={TYPOGRAPHY.FONT.h2}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => {
          // console.log('ITEM', item);

          return <LaneRenderItem image={item.poster} goTo={'MovieDetail'} />;
        }}
        //@ts-ignore
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Lane;
