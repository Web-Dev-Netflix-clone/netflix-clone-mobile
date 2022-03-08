import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

const SignInScreen = () => {
  return (
    <View
      style={[
        GLOBAL.LAYOUT.SafeArea,
        { backgroundColor: TYPOGRAPHY.COLOR.Black },
      ]}>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
