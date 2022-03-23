import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { Button } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // DrawerItem API not working properly yet?!
} from '@react-navigation/drawer';

import IonIcons from 'react-native-vector-icons/Ionicons';

import { TYPOGRAPHY } from '../global/styles/typography';
import { useNavigation } from '@react-navigation/native';
import { GLOBAL } from '../global/styles/global';

import { avatarData } from '../../assets/MockData/avatarData';
import Avatar from '../components/Avatar';
import CustomDrawerTopBar from './CustomDrawerComponents/CustomDrawerTopBar';
import { socialIconsData } from '../../assets/MockData/socialIconsData';
import CustomDrawerSocialBox from './CustomDrawerComponents/CustomDrawerSocialBox';
import { drawerLinks } from '../../assets/MockData/drawerLinks';
import CustomDrawerTouchableLink from './CustomDrawerComponents/CustomDrawerTouchableLink';

import { useSelector } from 'react-redux';
import { RootState } from '../state';
import SearchBar from '../components/SearchBar';
import { useActions } from '../hooks/useActions';
const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  const { fakeLogout } = useActions();
  const searchActive = useSelector(
    (state: RootState) => state.appState.searchActive
  );
  // console.log('PROPS is an object describing the Drawer', props);

  return searchActive ? (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
      }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: TYPOGRAPHY.COLOR.Black,
        }}>
        <CustomDrawerTopBar title={'Search'} />
        <SearchBar />
      </DrawerContentScrollView>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
      }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: TYPOGRAPHY.COLOR.Black,
        }}>
        {/* Custom Drawer Component with back button */}
        <CustomDrawerTopBar title={'Profiles & More'} />

        <View
          style={[
            GLOBAL.LAYOUT.rowCenter,
            {
              justifyContent: 'space-evenly',
              paddingVertical: GLOBAL.SPACING.sm,
            },
          ]}>
          {/* Maps avatar pictures to the UI */}
          {avatarData.map((avatar) => (
            <Avatar
              key={avatar.title}
              imageSource={avatar.source}
              height={50}
              width={50}
              title={avatar.title}
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
            onPress={() => console.log('Pressed')}>
            Manage Profiles
          </Button>
        </View>

        <View
          style={{
            backgroundColor: TYPOGRAPHY.COLOR.Dark,
            paddingVertical: GLOBAL.SPACING.md,
          }}>
          <View style={[GLOBAL.LAYOUT.rowCenter]}>
            <IonIcons
              name='chatbox-ellipses-outline'
              size={20}
              color={TYPOGRAPHY.COLOR.White}
            />
            <Text
              style={[TYPOGRAPHY.FONT.body, { marginLeft: GLOBAL.SPACING.sm }]}>
              Tell Friends About Netflix.
            </Text>
          </View>
          <Text
            style={[
              TYPOGRAPHY.FONT.body,
              { fontSize: TYPOGRAPHY.FONT_SIZES.sm },
            ]}>
            Share this link so your friends can join the conversation around all
            your favorite TV shows and movies.
          </Text>
          <Text
            style={[
              TYPOGRAPHY.FONT.subtitle,
              {
                textDecorationLine: 'underline',
                marginBottom: GLOBAL.SPACING.md,
              },
            ]}>
            Terms & Conditions
          </Text>
          <View
            style={[
              GLOBAL.LAYOUT.rowCenter,
              {
                padding: GLOBAL.SPACING.sm,
                marginHorizontal: GLOBAL.SPACING.sm,
                backgroundColor: TYPOGRAPHY.COLOR.Black,
              },
            ]}>
            <Text
              style={[
                TYPOGRAPHY.FONT.body,
                { fontSize: TYPOGRAPHY.FONT_SIZES.sm },
                { paddingRight: GLOBAL.SPACING.sm, marginBottom: 0 },
              ]}>
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
            {socialIconsData.map((icon, i) => (
              <CustomDrawerSocialBox
                key={icon.id}
                imageSource={icon.source}
                height={40}
                width={40}
                title={icon.title}
                iconName={icon.iconName}
                borderWidth={i === socialIconsData.length - 1 ? -1 : 2}
              />
            ))}
          </View>
        </View>

        {/* DrawerItemList => uncomment for auto react navigation links */}
        {/* <View
        style={{
          flex: 1,
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          paddingTop: 10,
        }}>
        <DrawerItemList
          style={{ backgroundColor: TYPOGRAPHY.COLOR.Black }}
          {...props}
        />
      </View> */}
      </DrawerContentScrollView>

      <View
        style={[
          GLOBAL.LAYOUT.rowCenter,
          { paddingVertical: GLOBAL.SPACING.sm },
        ]}>
        <Ionicons name='checkmark' size={26} color={TYPOGRAPHY.COLOR.White} />
        <Text
          style={[
            TYPOGRAPHY.FONT.h3,
            {
              marginLeft: GLOBAL.SPACING.md,
              marginBottom: 0,
              color: TYPOGRAPHY.COLOR.White,
            },
          ]}>
          My List
        </Text>
      </View>

      <View
        style={{
          padding: GLOBAL.SPACING.lg,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        {/* Maps the links */}
        {drawerLinks.map((link) => (
          <CustomDrawerTouchableLink
            key={link.id}
            title={link.title}
            onClick={
              link.title === 'Sign Out' ? () => fakeLogout() : link.onClick
            }
          />
        ))}
      </View>
    </View>
  );
};

export default CustomDrawer;
