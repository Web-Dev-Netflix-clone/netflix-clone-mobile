import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Pressable,
} from 'react-native';

import { Button } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // DrawerItem API not working properly yet?!
} from '@react-navigation/drawer';

import IonIcons from 'react-native-vector-icons/Ionicons';

import { TYPOGRAPHY } from '../global/styles/typography';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { GLOBAL } from '../global/styles/global';
import Avatar from '../components/Avatar';

const CustomDrawer = (props: any) => {
  const navigation = useNavigation();

  const width = useWindowDimensions().width * 0.3;

  return (
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
        <View
          style={[
            GLOBAL.LAYOUT.rowCenter,
            {
              backgroundColor: TYPOGRAPHY.COLOR.Black,
              paddingVertical: GLOBAL.SPACING.sm,
            },
          ]}>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
            <Ionicons
              name='arrow-back'
              size={26}
              color={TYPOGRAPHY.COLOR.White}
            />
          </Pressable>

          <Text
            style={{
              color: TYPOGRAPHY.COLOR.White,
              marginLeft: GLOBAL.SPACING.md,
              fontSize: 18,
              fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
            }}>
            Profiles & More
          </Text>
        </View>
        <View
          style={[
            GLOBAL.LAYOUT.rowCenter,
            {
              justifyContent: 'space-evenly',
              paddingVertical: GLOBAL.SPACING.sm,
            },
          ]}>
          <Avatar
            imageSource={require('../../assets/netflix-avatars/avatar-blue.png')}
            height={50}
            width={50}
            title={'User'}
          />
          <Avatar
            imageSource={require('../../assets/netflix-avatars/avatar-red.png')}
            height={50}
            width={50}
            title={'User'}
          />
          <Avatar
            imageSource={require('../../assets/netflix-avatars/avatar-yellow.png')}
            height={50}
            width={50}
            title={'User'}
          />
          <Avatar
            imageSource={require('../../assets/netflix-avatars/avatar-kids.png')}
            height={50}
            width={50}
            title={'User'}
          />
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
          <View style={GLOBAL.LAYOUT.rowCenter}>
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
              { textDecorationLine: 'underline' },
            ]}>
            Terms & Conditions
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: TYPOGRAPHY.COLOR.Black,
            paddingTop: 10,
          }}>
          {/* DrawerItemList => uncomment for links */}
          {/* <DrawerItemList
            // style={{ backgroundColor: TYPOGRAPHY.COLOR.Black }}
            {...props}
          /> */}
        </View>
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
          backgroundColor: '#000',
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 15,
                color: TYPOGRAPHY.COLOR.White,
                fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
                marginLeft: 5,
              }}>
              App Settings
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 15,
                color: TYPOGRAPHY.COLOR.White,
                fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
                marginLeft: 5,
              }}>
              Account
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 15,
                color: TYPOGRAPHY.COLOR.White,
                fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
                marginLeft: 5,
              }}>
              Help
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 15,
                color: TYPOGRAPHY.COLOR.White,
                fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
