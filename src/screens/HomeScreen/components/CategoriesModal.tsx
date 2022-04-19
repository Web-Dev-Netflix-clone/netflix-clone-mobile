import React from 'react';
import { View, StyleSheet, Modal, ViewStyle, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { LinearGradient } from 'expo-linear-gradient';
import { categoriesData } from '../../../../assets/mock-data/categoriesData';

import { PressableText } from '../../../global/elements/PressableText';
import { IMGSTYLES } from '../../../global/styles/imgStyles';

interface ICategoriesModal {
  style?: ViewStyle;
  modalActive: boolean;
  setModalActive: (bool: boolean) => void;
}

const CategoriesModal = ({
  style,
  modalActive,
  setModalActive,
}: ICategoriesModal) => {
  return (
    <Modal
      visible={modalActive}
      transparent={true}
      animationType='fade'
      statusBarTranslucent={true}>
      <View style={[styles.modalContainer, style]}>
        <LinearGradient
          colors={['rgba(0,0,0, 0.9)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0,0.9)']}
          style={{ ...IMGSTYLES.background, zIndex: 10 }}
        />
        <ScrollView
          style={{
            paddingTop: GLOBAL.SPACING.xxxxl,
            zIndex: 12,
          }}>
          <PressableText
            textStyle={TYPOGRAPHY.FONT.h2}
            text='Home'
            onClick={() => setModalActive(false)}
          />
          <View style={{ paddingBottom: 150 }}>
            {categoriesData?.map(({ id, title }) => {
              return (
                <PressableText
                  key={id}
                  text={title}
                  textStyle={{
                    ...TYPOGRAPHY.FONT.h3,
                    color: TYPOGRAPHY.COLOR.GreyLight,
                    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
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
          color={TYPOGRAPHY.COLOR.White}
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
});
