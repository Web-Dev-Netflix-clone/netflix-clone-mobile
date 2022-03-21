import { View, Text } from 'react-native';
import React from 'react';
import { GLOBAL } from '../global/styles/global';
import { IconButton } from 'react-native-paper';

const DiscoverNav = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text>DiscoverNav</Text>
      <Text>Films</Text>
      <View style={GLOBAL.LAYOUT.rowCenter}>
        <Text>Categories</Text>
        <IconButton
          icon='close'
          color='gray'
          size={30}
          onPress={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
};

export default DiscoverNav;
