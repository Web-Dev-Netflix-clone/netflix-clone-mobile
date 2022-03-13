import { View, Text } from 'react-native';
import React from 'react';

const BottomSheetRenderContent = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );
};

export default BottomSheetRenderContent;
