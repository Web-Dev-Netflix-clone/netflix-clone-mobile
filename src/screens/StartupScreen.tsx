import React from 'react';
import { Image, View } from 'react-native';
import { IMGSTYLES } from '../global/styles/imgStyles';

const StartupScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={IMGSTYLES.mainImage}
        source={require('../../assets/netflix-logos/netflix-logo-2560x1440.png')}
      />
    </View>
  );
};

export default StartupScreen;
