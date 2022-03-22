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
          colors={['rgba(0,0,0, 0.9)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0,0.9)']}
          style={[styles.background, { zIndex: 11 }]}
        />
        <ScrollView
          style={{
            paddingTop: GLOBAL.SPACING.xxxxl,
            zIndex: 12,
          }}>
          <PressableText
            textStyle={{ ...TYPOGRAPHY.FONT.h2, color: '#fff' }}
            text='Home'
            onClick={() => setModalActive(false)}
          />
          <View style={{ paddingBottom: 150 }}>
            {categoriesData?.map((category) => {
              return (
                <PressableText
                  key={category.id}
                  text={category.title}
                  textStyle={{
                    ...TYPOGRAPHY.FONT.h3,
                    color: TYPOGRAPHY.COLOR.GreyLight,
                    fontFamily: 'netflix-sans-light',
                    fontSize: TYPOGRAPHY.FONT_SIZES.md,
                    marginBottom: GLOBAL.SPACING.md,
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon='close-circle'
          color='#fff'
          size={40}
          onPress={() => setModalActive(false)}
        />
      </View>
    </Modal>
  );
};

export default CategoriesModal;

const styles = StyleSheet.create({
  modalContainer: {
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  closeButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '3%',
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
