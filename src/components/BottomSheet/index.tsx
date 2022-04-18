import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import BottomSheetContent from './components/BottomSheetContent';

import {
  selectBottomSheetMovie,
  selectBottomSheetVisibility,
} from '../../state/selectors/selectors';
import { Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useActions } from '../../hooks/useActions';
import { DrawerStackParams } from '../../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const BottomSheet = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerStackParams>>();
  const { hideBottomSheet } = useActions();
  const bottomSheetVisible = useSelector(selectBottomSheetVisibility);
  const bottomSheetMovie = useSelector(selectBottomSheetMovie);

  return (
    <Modal
      coverScreen={false}
      hasBackdrop={false}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      isVisible={bottomSheetVisible}>
      <Pressable
        style={{ zIndex: 0 }}
        onPress={() => {
          navigation.navigate('MovieDetail', bottomSheetMovie);
          hideBottomSheet();
        }}>
        <BottomSheetContent />
      </Pressable>
    </Modal>
  );
};

export default BottomSheet;
