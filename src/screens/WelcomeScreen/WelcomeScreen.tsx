import { View, Text, StyleSheet, SafeAreaView, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../navigation/navigation';
import { TYPOGRAPHY } from '../../global/styles/typography';
import WelcomeCarousel from './components/WelcomeCarousel';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { GLOBAL } from '../../global/styles/global';

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ ...GLOBAL.LAYOUT.SafeArea, justifyContent: 'space-evenly' }}>
      <WelcomeCarousel />
      <View style={{ backgroundColor: '#000', padding: GLOBAL.SPACING.sm }}>
        <Button
          style={{ ...styles.button, marginTop: GLOBAL.SPACING.sm }}
          color='red'
          mode='contained'
          onPress={() => setModalVisible(true)}>
          Get Started
        </Button>
      </View>
      <Modal
        visible={isModalVisible}
        transparent={false}
        animationType='slide'
        statusBarTranslucent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.closeButtonContainer}>
            <IconButton
              icon='close'
              color='gray'
              size={30}
              onPress={() => setModalVisible(false)}
            />
          </View>
          <View>
            <Text style={styles.header}>Ready to watch?</Text>
            <Text style={styles.text}>
              Enter your email to create your account or to sign in.
            </Text>
          </View>
          <View
            style={{
              marginBottom: GLOBAL.SPACING.md,
              paddingTop: GLOBAL.SPACING.xxl,
            }}>
            <TextInput
              label='Email'
              mode='outlined'
              autoComplete=''
              style={{ backgroundColor: 'white' }}
              placeholderTextColor='#fff'
              outlineColor='gray'
              activeOutlineColor='blue'
              selectionColor='#fff'
            />
          </View>

          <Button
            style={styles.button}
            color='red'
            mode='contained'
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('Signup');
            }}>
            Get Started
          </Button>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    padding: GLOBAL.SPACING.md,
  },
  closeButtonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    margin: GLOBAL.SPACING.md,
  },
  header: {
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    fontSize: TYPOGRAPHY.FONT_SIZES.lg,
  },
  text: {
    color: TYPOGRAPHY.COLOR.Grey,
    textAlign: 'center',
    marginHorizontal: 30,
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    fontSize: TYPOGRAPHY.FONT_SIZES.md,
  },
});
