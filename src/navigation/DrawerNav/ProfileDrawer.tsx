import React from 'react';
import { Text, View } from 'react-native';

import { Button } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';

import IonIcons from 'react-native-vector-icons/Ionicons';

import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { avatarData } from '../../../assets/mock-data/avatarData';
import { drawerLinks } from '../../../assets/mock-data/drawerLinks';
import { socialIconsData } from '../../../assets/mock-data/socialIconsData';
import { useActions } from '../../hooks/useActions';
import Avatar from './components/Avatar';
import DrawerTopBar from './components/DrawerTopBar';
import SocialBox from './components/SocialBox';
import TouchableLink from './components/TouchableLink';

const ProfileDrawer = () => {
  const { fakeLogout, myListActive } = useActions();

  return (
    <>
      <DrawerTopBar title={'Profiles & More'} />

      <View
        style={{
          ...GLOBAL.LAYOUT.rowCenter,
          justifyContent: 'space-evenly',
          paddingVertical: GLOBAL.SPACING.sm,
        }}>
        {/* Maps avatar pictures to the UI */}
        {avatarData.map(({ title, source }) => (
          <Avatar
            key={title}
            imageSource={source}
            height={50}
            width={50}
            title={title}
          />
        ))}

        <Avatar
          height={50}
          width={50}
          title={'Add Prof...'}
          iconName='md-add-circle'
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Button
          icon='pencil'
          mode='contained'
          style={{ width: '50%', backgroundColor: TYPOGRAPHY.COLOR.Black }}
          uppercase={false}
          onPress={() => {}}>
          Manage Profiles
        </Button>
      </View>

      <View
        style={{
          backgroundColor: TYPOGRAPHY.COLOR.Dark,
          paddingVertical: GLOBAL.SPACING.md,
        }}>
        <View style={GLOBAL.LAYOUT.rowCenter}>
          <IonIcons
            name='chatbox-ellipses-outline'
            size={20}
            color={TYPOGRAPHY.COLOR.White}
          />
          <Text
            style={{ ...TYPOGRAPHY.FONT.body, marginLeft: GLOBAL.SPACING.sm }}>
            Tell Friends About Netflix.
          </Text>
        </View>
        <Text
          style={{
            ...TYPOGRAPHY.FONT.body,
            fontSize: TYPOGRAPHY.FONT_SIZES.sm,
          }}>
          Share this link so your friends can join the conversation around all
          your favorite TV shows and movies.
        </Text>
        <Text
          style={{
            ...TYPOGRAPHY.FONT.subtitle,
            textDecorationLine: 'underline',
            marginBottom: GLOBAL.SPACING.md,
          }}>
          Terms & Conditions
        </Text>
        <View
          style={{
            ...GLOBAL.LAYOUT.rowCenter,
            padding: GLOBAL.SPACING.sm,
            marginHorizontal: GLOBAL.SPACING.sm,
            backgroundColor: TYPOGRAPHY.COLOR.Black,
          }}>
          <Text
            style={{
              ...TYPOGRAPHY.FONT.body,
              fontSize: TYPOGRAPHY.FONT_SIZES.sm,
              paddingRight: GLOBAL.SPACING.sm,
              marginBottom: 0,
            }}>
            http://www.netflix.com/nl/n79e23....
          </Text>
          <Button
            uppercase={false}
            style={{ backgroundColor: TYPOGRAPHY.COLOR.White, width: '30%' }}
            color={TYPOGRAPHY.COLOR.Black}>
            Copy Link
          </Button>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: GLOBAL.SPACING.md,
          }}>
          {/* Maps over icon data and creates social icons */}
          {socialIconsData.map(({ id, source, title, iconName }, i) => (
            <SocialBox
              key={id}
              imageSource={source}
              height={40}
              width={40}
              title={title}
              iconName={iconName}
              borderWidth={i === socialIconsData.length - 1 ? -1 : 2}
            />
          ))}
        </View>
      </View>

      <View
        style={{
          ...GLOBAL.LAYOUT.rowCenter,
          paddingVertical: GLOBAL.SPACING.sm,
        }}>
        <Ionicons name='checkmark' size={26} color={TYPOGRAPHY.COLOR.White} />
        <TouchableOpacity onPress={() => myListActive()}>
          <Text
            style={{
              ...TYPOGRAPHY.FONT.h3,
              marginLeft: GLOBAL.SPACING.md,
              marginBottom: 0,
            }}>
            My List
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: GLOBAL.SPACING.lg,
          borderTopWidth: 1,
          borderTopColor: TYPOGRAPHY.COLOR.GreyLight,
        }}>
        {/* Maps the links */}
        {drawerLinks.map(({ id, title, onClick }) => (
          <TouchableLink
            key={id}
            title={title}
            onClick={title === 'Sign Out' ? () => fakeLogout() : onClick}
          />
        ))}
      </View>
    </>
  );
};

export default ProfileDrawer;
