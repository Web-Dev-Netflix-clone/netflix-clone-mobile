import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import BottomSheetContent from './BottomSheetContent';
import { RootState } from '../state';

const BottomSheet = () => {
  const bottomSheetVisible = useSelector(
    (state: RootState) => state.appState.showBottomSheet
  );

  return (
    <Modal
      coverScreen={false}
      hasBackdrop={false}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      isVisible={bottomSheetVisible}>
      <BottomSheetContent />
    </Modal>
  );
};

export default BottomSheet;
