import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';
import { HorizontalRule } from '../../global/elements/HorizontalRule';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View>
        <Text style={styles.header}>What do you need help with?</Text>
      </View>
      <View style={styles.listContainer}>
        <List.Item
          title='Help center'
          titleStyle={styles.listItem}
          left={() => (
            <List.Icon color={TYPOGRAPHY.COLOR.Blue} icon='open-in-new' />
          )}
        />
        <HorizontalRule />
        <List.Item
          title='Request TV shows or movies'
          titleStyle={styles.listItem}
          left={() => (
            <List.Icon color={TYPOGRAPHY.COLOR.Blue} icon='filmstrip' />
          )}
        />
        <HorizontalRule />
        <List.Item
          title='Update password'
          titleStyle={styles.listItem}
          left={() => <List.Icon color={TYPOGRAPHY.COLOR.Blue} icon='lock' />}
        />
        <HorizontalRule />
        <List.Item
          title='Cancel account'
          titleStyle={styles.listItem}
          left={() => <List.Icon color={TYPOGRAPHY.COLOR.Blue} icon='cancel' />}
        />
        <HorizontalRule />
        <List.Item
          title='Troubleshooting streaming issues'
          titleStyle={styles.listItem}
          left={() => <List.Icon color={TYPOGRAPHY.COLOR.Blue} icon='wrench' />}
        />
        <HorizontalRule />
        <List.Item
          title='Privacy'
          titleStyle={styles.listItem}
          left={() => (
            <List.Icon color={TYPOGRAPHY.COLOR.Blue} icon='security' />
          )}
        />
        <HorizontalRule />
        <List.Item
          title='Terms of use'
          titleStyle={styles.listItem}
          left={() => (
            <List.Icon color={TYPOGRAPHY.COLOR.Blue} icon='text-box-outline' />
          )}
        />
        <HorizontalRule />
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.header}>Want to contact us?</Text>
        <Text style={styles.text}>
          You can call us for free when you use your internet connection.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            icon='chat'
            mode='contained'
            color={TYPOGRAPHY.COLOR.Black}
            style={{ width: '30%' }}
            onPress={() => {}}>
            chat
          </Button>
          <Button
            icon='phone'
            mode='contained'
            color={TYPOGRAPHY.COLOR.Black}
            style={{ width: '30%' }}
            onPress={() => {}}>
            call
          </Button>
        </View>
      </View>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GLOBAL.SPACING.md,
    backgroundColor: TYPOGRAPHY.COLOR.White,
  },
  header: {
    color: 'black',
    textAlign: 'center',
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    fontSize: TYPOGRAPHY.FONT_SIZES.lg,
  },
  listContainer: {
    height: '40%',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  listItem: {
    color: 'blue',
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    fontSize: TYPOGRAPHY.FONT_SIZES.md,
  },
  contactContainer: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    fontSize: TYPOGRAPHY.FONT_SIZES.sm,
    marginVertical: GLOBAL.SPACING.md,
  },
  buttonContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
