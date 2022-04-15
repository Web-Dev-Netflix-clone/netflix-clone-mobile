import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { useActions } from '../../hooks/useActions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackParams } from '../../navigation/navigation';

const SignInScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackParams>>();
  const { fakeLogin } = useActions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputActive, setInputActive] = useState(false);

  return (
    <KeyboardAvoidingView
      style={[
        GLOBAL.LAYOUT.SafeArea,
        {
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          padding: GLOBAL.SPACING.md,
          justifyContent: 'center',
        },
      ]}>
      <View
        style={{
          marginBottom: GLOBAL.SPACING.md,
          paddingTop: GLOBAL.SPACING.xxl,
        }}>
        <TextInput
          label='Email or phone number'
          mode='outlined'
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoComplete=''
          style={
            inputActive
              ? {
                  ...styles.input,
                  backgroundColor: TYPOGRAPHY.COLOR.GreySecondary,
                }
              : styles.input
          }
          placeholderTextColor='#fff'
          outlineColor='transparent'
          activeOutlineColor='#FFF'
          selectionColor='#fff'
          onFocus={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
        />
        <TextInput
          label='Password'
          mode='outlined'
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoComplete=''
          style={
            inputActive
              ? {
                  ...styles.input,
                  backgroundColor: TYPOGRAPHY.COLOR.GreySecondary,
                }
              : styles.input
          }
          outlineColor='transparent'
          activeOutlineColor='#fff'
          selectionColor='#fff'
          onFocus={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
        />
      </View>

      <Button
        color='white'
        mode='outlined'
        style={{
          borderColor: '#fff',
          borderWidth: 2,
          marginBottom: GLOBAL.SPACING.lg,
          paddingVertical: GLOBAL.SPACING.sm,
        }}
        onPress={() => {
          fakeLogin();
        }}>
        Sign In
      </Button>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 150,
        }}>
        <Pressable onPress={() => navigation.navigate('Help')}>
          <Text
            style={[
              GLOBAL.TEXT.Secondary,
              { color: TYPOGRAPHY.COLOR.GreyLight },
            ]}>
            Need help?
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={GLOBAL.TEXT.Secondary}>
            New to netflix? Sign up now.
          </Text>
        </Pressable>

        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: GLOBAL.SPACING.md,
          }}>
          <Pressable onPress={() => console.log('click')}>
            <Text style={TYPOGRAPHY.FONT.subtitle}>
              Sign in is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    marginBottom: GLOBAL.SPACING.sm,
    paddingTop: GLOBAL.SPACING.md,
    backgroundColor: TYPOGRAPHY.COLOR.DarkTertiary,
    color: TYPOGRAPHY.COLOR.White,
    borderColor: 'transparent',
  },
});
