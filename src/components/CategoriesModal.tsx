import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

const CategoriesModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      visible={isModalVisible}
      transparent={false}
      animationType='slide'
      statusBarTranslucent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.closeButtonContainer}></View>
        <View></View>
        <View
          style={{
            marginBottom: GLOBAL.SPACING.md,
            paddingTop: GLOBAL.SPACING.xxl,
          }}></View>
        <IconButton
          icon='close'
          color='gray'
          size={30}
          onPress={() => setModalVisible(false)}
        />
      </View>
    </Modal>
  );
};

export default CategoriesModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: GLOBAL.SPACING.md,
  },
  closeButtonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    margin: GLOBAL.SPACING.md,
  },
});
