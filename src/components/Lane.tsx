import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { View, Text, FlatList } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

interface ILane {
  data: any;
  LaneRenderItem: FunctionComponent<any>;
  title: string;
}

const Lane = ({ data, LaneRenderItem, title }: ILane) => {
  const componentRendered = useRef(0);

  const keyExtractor = useCallback((item) => item.id, []);
  const renderItem = useCallback(({ item }) => {
    return (
      <LaneRenderItem
        image={item.poster || item.backdrop}
        goTo={'MovieDetail'}
      />
    );
  }, []);

  useEffect(() => {
    //console.log('Lane COMPONENT RENDERED', componentRendered.current);
    componentRendered.current++;
  });

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
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Lane;
