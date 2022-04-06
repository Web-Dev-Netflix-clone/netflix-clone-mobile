import React, { FunctionComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { IMovie } from '../state/actionsInterfaces/moviesInterfaces';
import uuid from 'react-native-uuid';

interface ILane {
  data: IMovie[] | any;
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
          // console.log(item);

          return (
            <LaneRenderItem
              image={
                item.poster
                  ? item.poster
                  : 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7d3e10f2161704190ddb29f2736d69fb_6a0783cc-d2fe-420d-ae72-0a0c467db7bf_500x749.jpg?v=1573587299'
              }
              goTo={'MovieDetail'}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Lane;
