import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import banner from '../../../assets/netflix-banner/download-screen-resized2.png';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';

const DownloadsScreen = () => {
  return (
    <View
      style={{
        ...GLOBAL.LAYOUT.SafeArea,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: 110,
        padding: GLOBAL.SPACING.md,
      }}>
      <View
        style={{
          ...GLOBAL.LAYOUT.rowCenter,
          paddingBottom: GLOBAL.SPACING.xxxl,
        }}>
        <FontAwesome name='cog' size={30} color={TYPOGRAPHY.COLOR.GreyLight} />
        <Text
          style={{
            ...TYPOGRAPHY.FONT.subtitle,
            marginLeft: 15,
            marginBottom: 0,
          }}>
          Smart Downloads
        </Text>
      </View>
      <View>
        <Text style={TYPOGRAPHY.FONT.h2}>Introducing Downloads for You</Text>
        <Text style={TYPOGRAPHY.FONT.subtitle}>
          We'll download a personalized selection of movies and shows for you,
          so there's always something to watch on your phone.
        </Text>
      </View>

      <ImageBackground
        source={banner}
        resizeMode='contain'
        style={{
          height: 300,
          marginBottom: GLOBAL.SPACING.xxxl,
        }}
      />
      <View style={{ alignItems: 'center' }}>
        <Button
          style={{
            backgroundColor: TYPOGRAPHY.COLOR.Blue,
            width: '100%',
            marginBottom: GLOBAL.SPACING.xxxl,
          }}
          uppercase={false}
          color={TYPOGRAPHY.COLOR.White}
          onPress={() => {}}>
          Set Up
        </Button>
        <Button
          style={{
            backgroundColor: TYPOGRAPHY.COLOR.DarkSecondary,
            width: '60%',
          }}
          uppercase={false}
          color={TYPOGRAPHY.COLOR.White}
          onPress={() => {}}>
          <Text
            style={{
              fontSize: TYPOGRAPHY.FONT_SIZES.sm,
              fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
            }}>
            Find More to Download
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default DownloadsScreen;
