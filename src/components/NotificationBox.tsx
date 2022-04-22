import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import netflixLogo from '../../assets/netflix-logos/netflix-logo-icon-400x300.png';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';

interface INotificationBox {
  iconName?: string;
  text?: string;
}

const NotifcationBox = ({ iconName, text }: INotificationBox) => {
  const { showNotificationToggle } = useActions();

  const [showNotication, setShowNotification] = useState(true);
  const notifcationMessage = useSelector(
    (state: RootState) => state.appState.notificationMessage
  );

  useEffect(() => {
    const clear = setTimeout(() => {
      setShowNotification(false);
      showNotificationToggle('Remove from My List');
    }, 2000);

    return () => {
      clearTimeout(clear);
    };
  }, []);

  return showNotication ? (
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
        {notifcationMessage}
      </Text>
    </View>
  ) : null;
};

export default NotifcationBox;
