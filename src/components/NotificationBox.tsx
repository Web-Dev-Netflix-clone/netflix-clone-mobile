import React from 'react';
import { Text, View, Image } from 'react-native';
import netflixLogo from '../../assets/netflix-logos/netflix-logo-icon-400x300.png';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { TYPOGRAPHY } from '../global/styles/typography';

interface INotificationBox {
  iconName?: string;
  text?: string;
}

const NotifcationBox = ({ iconName, text }: INotificationBox) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(79, 80, 84, 0.9)',
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignSelf: 'center',
        bottom: '15%',
        borderRadius: 20,
        zIndex: 1000,
      }}>
      <Image
        style={{ ...IMGSTYLES.tinyLogo, marginRight: 10 }}
        source={netflixLogo}
      />
      <Text
        style={{
          ...TYPOGRAPHY.FONT.h3,
          fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
          marginBottom: 0,
        }}>
        Added to My List
      </Text>
    </View>
  );
};

export default NotifcationBox;
