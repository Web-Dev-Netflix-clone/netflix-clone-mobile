import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ViewStyle,
  Pressable,
  ScrollView,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { LinearGradient } from 'expo-linear-gradient';
import { categoriesData } from '../../assets/MockData/categoriesData';
import { PressableText } from '../global/elements/PressableText';

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
      <View style={[styles.modalContainer, style]}>
        <LinearGradient
          colors={['rgba(0,0,0, 0.8)', 'rgba(0,0,0, 0.8)', 'rgba(0,0,0,0.8)']}
          style={[styles.background, { zIndex: 11 }]}
        />
        <ScrollView style={{ paddingTop: GLOBAL.SPACING.xxxxl, zIndex: 12 }}>
          <Pressable onPress={() => setModalActive(false)}>
            <Text style={[TYPOGRAPHY.FONT.h1, { color: '#fff' }]}>Home</Text>
          </Pressable>
          {categoriesData?.map((category) => {
            console.log(category.title);
            return (
              <PressableText
                text={category.title}
                textStyle={TYPOGRAPHY.FONT.body}
              />
              // <Text style={TYPOGRAPHY.FONT.body}>{category.title}</Text>
            );
          })}
        </ScrollView>
        <View style={styles.closeButtonContainer}>
          <IconButton
            icon='close-circle'
            color='#fff'
            size={40}
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
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  closeButtonContainer: {
    position: 'relative',
    zIndex: 12,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
});
