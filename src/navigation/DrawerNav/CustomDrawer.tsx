import React from 'react';
import { View, Text } from 'react-native';

import { Button } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // DrawerItem API not working properly yet?!
} from '@react-navigation/drawer';

import IonIcons from 'react-native-vector-icons/Ionicons';

import { TYPOGRAPHY } from '../../global/styles/typography';
import { GLOBAL } from '../../global/styles/global';

import { avatarData } from '../../../assets/mock-data/avatarData';
import Avatar from './CustomDrawerComponents/Avatar';
import TopBar from './CustomDrawerComponents/TopBar';
import { socialIconsData } from '../../../assets/mock-data/socialIconsData';
import SocialBox from './CustomDrawerComponents/SocialBox';
import { drawerLinks } from '../../../assets/mock-data/drawerLinks';
import TouchableLink from './CustomDrawerComponents/TouchableLink';

import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import SearchBar from './CustomDrawerComponents/SearchBar';
import { useActions } from '../../hooks/useActions';

import SearchMovieBox from './CustomDrawerComponents/SearchMovieBox';
const CustomDrawer = (props: any) => {
  const { fakeLogout } = useActions();
  const searchActive = useSelector(
    (state: RootState) => state.appState.searchActive
  );
  const searchMovies = useSelector(
    (state: RootState) => state.movies.allMoviesSearchable
  );

  const searchInput = useSelector(
    (state: RootState) => state.movies.searchInput
  );

  const filteredArray = searchMovies
    ?.map((result) => {
      return { ...result, title: result.title.toLowerCase() };
    })
    .filter((result) => result.title.includes(searchInput.toLowerCase()));

  return searchActive ? (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: GLOBAL.SPACING.xxxxl,
      }}>
      <TopBar title={'Search'} />

      <SearchBar />

      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: GLOBAL.SPACING.md,
          backgroundColor: TYPOGRAPHY.COLOR.Black,
        }}>
        <Text
          style={{
            ...TYPOGRAPHY.FONT.h2,
            marginBottom: GLOBAL.SPACING.md,
            marginLeft: GLOBAL.SPACING.sm,
          }}>
          Top Searches
        </Text>
        {searchInput.length > 0 &&
          filteredArray?.map((movie) => {
            return (
              <SearchMovieBox
                key={movie.id}
                title={movie.title}
                image={movie.backdrop}
              />
            );
          })}
      </DrawerContentScrollView>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: TYPOGRAPHY.COLOR.Black,
        paddingTop: GLOBAL.SPACING.xxxxl,
      }}>
      <TopBar title={'Profiles & More'} />

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
          {socialIconsData.map((icon, i) => (
            <SocialBox
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
          <TouchableLink
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
