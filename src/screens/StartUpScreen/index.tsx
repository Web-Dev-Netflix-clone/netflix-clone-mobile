import React from 'react';
import { Image, View } from 'react-native';
import { IMGSTYLES } from '../../global/styles/imgStyles';
import { TYPOGRAPHY } from '../../global/styles/typography';

const StartupScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{ ...IMGSTYLES.mainImage }}
        source={require('../../../assets/netflix-logos/netflix-logo-2560x1440.png')}
      />
    </View>
  );
};

export default StartupScreen;
