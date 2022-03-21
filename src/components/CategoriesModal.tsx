import React from 'react';
import { View, Text, StyleSheet, Modal, ViewStyle } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { LinearGradient } from 'expo-linear-gradient';

interface ICategoriesModal {
  style?: ViewStyle;
  modalActive?: Boolean;
  setModalActive?: any;
}

const CategoriesModal = ({
  style,
  modalActive,
  setModalActive,
}: ICategoriesModal) => {
  return (
    <Modal
      //@ts-ignore
      visible={modalActive}
      transparent={true}
      animationType='fade'
      statusBarTranslucent={true}>
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={['rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0,0.3)']}
          style={[styles.background, { zIndex: 100 }]}
        />
        <View style={styles.closeButtonContainer}>
          <IconButton
            icon='close'
            color='gray'
            size={30}
            onPress={() => setModalActive(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CategoriesModal;

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    flex: 1,
    padding: GLOBAL.SPACING.md,
    zIndex: 100,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  closeButtonContainer: {
    position: 'relative',

    zIndex: 101,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
