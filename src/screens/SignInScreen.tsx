import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputActive, setInputActive] = useState(false);

  return (
    <View
      style={[
        GLOBAL.LAYOUT.SafeArea,
        {
          backgroundColor: TYPOGRAPHY.COLOR.Black,
          padding: GLOBAL.SPACING.sm,
          justifyContent: 'center',
        },
      ]}>
      <View style={{ marginBottom: GLOBAL.SPACING.md }}>
        <TextInput
          label='Email or phone number'
          mode='outlined'
          value={email}
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
          activeOutlineColor='#FFF'
          selectionColor='#fff'
          onFocus={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
        />
        <TextInput
          label='Password'
          mode='outlined'
          value={password}
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
        onPress={() => console.log('presss')}>
        Sign In
      </Button>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 150,
        }}>
        <Text style={GLOBAL.TEXT.Secondary}>Need help?</Text>

        <Text style={GLOBAL.TEXT.Secondary}>New to netflix? Sign up now.</Text>

        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: GLOBAL.SPACING.md,
          }}>
          <Text style={TYPOGRAPHY.FONT.subtitle}>
            Sign in is protected by Google reCAPTCHA to ensure you're not a bot.
            Learn more.
          </Text>
        </View>
      </View>
    </View>
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
function setBackgoundColor(arg0: string): void {
  throw new Error('Function not implemented.');
}
