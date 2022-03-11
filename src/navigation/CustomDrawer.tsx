import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, // DrawerItem API not working properly yet?!
} from '@react-navigation/drawer';

import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TYPOGRAPHY } from '../global/styles/typography';

const CustomDrawer = (props: any) => {
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
          backgroundColor: TYPOGRAPHY.COLOR.Dark,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
          }}>
          John Doe
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Roboto-Regular',
              marginRight: 5,
            }}>
            280 Coins
          </Text>
          {/* <FontAwesome5 name='coins' size={14} color='#fff' /> */}
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: TYPOGRAPHY.COLOR.Black,
            paddingTop: 10,
          }}>
          <DrawerItemList
            // style={{ backgroundColor: TYPOGRAPHY.COLOR.Black }}
            {...props}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          backgroundColor: '#000',
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IonIcons
              color={TYPOGRAPHY.COLOR.White}
              name='share-social-outline'
              size={22}
            />
            <Text
              style={{
                fontSize: 15,
                color: TYPOGRAPHY.COLOR.White,
                fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IonIcons
              color={TYPOGRAPHY.COLOR.White}
              name='exit-outline'
              size={22}
            />
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
