import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { LoginStackParams } from '../../navigation/navigation';

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackParams>>();
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Ready to watch unlimited movies and shows?
        </Text>
        <Text style={styles.text}>
          Create an account and we will send you an email with everything you
          need to know about Netflix.
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
          style={{ backgroundColor: TYPOGRAPHY.COLOR.White }}
          placeholderTextColor={TYPOGRAPHY.COLOR.White}
          outlineColor='gray'
          activeOutlineColor='green'
          selectionColor={TYPOGRAPHY.COLOR.White}
        />
        <TextInput
          label='Password'
          mode='outlined'
          autoComplete=''
          style={{ backgroundColor: TYPOGRAPHY.COLOR.White }}
          outlineColor='gray'
          activeOutlineColor='red'
          selectionColor={TYPOGRAPHY.COLOR.White}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={!checked ? 'checked' : 'unchecked'}
          uncheckedColor='gray'
          color='blue'
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.text}>
          Yes, send me special offers from Netflix (Optional)
        </Text>
      </View>
      <Button
        style={styles.button}
        color='red'
        mode='contained'
        onPress={() => navigation.navigate('Signin')}>
        Continue
      </Button>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GLOBAL.SPACING.md,
    justifyContent: 'flex-start',
    backgroundColor: TYPOGRAPHY.COLOR.White,
  },
  header: {
    color: TYPOGRAPHY.COLOR.Black,
    marginBottom: 10,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    fontSize: TYPOGRAPHY.FONT_SIZES.lg,
  },
  text: {
    color: TYPOGRAPHY.COLOR.Grey,
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    fontSize: TYPOGRAPHY.FONT_SIZES.md,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: '100%',
    borderRadius: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
});
