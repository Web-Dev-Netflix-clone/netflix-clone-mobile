import React from 'react';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import BottomSheetContent from './components/BottomSheetContent';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { useActions } from '../../hooks/useActions';
import { DrawerTabParams } from '../../navigation/navigation';
import {
  selectBottomSheetMovie,
  selectBottomSheetVisibility,
} from '../../state/selectors/selectors';

const BottomSheet = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerTabParams>>();
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
