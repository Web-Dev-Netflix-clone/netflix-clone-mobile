import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import BottomSheetContent from './components/BottomSheetContent';

import { selectBottomSheetVisibility } from '../../state/selectors/selectors';

const BottomSheet = () => {
  const bottomSheetVisible = useSelector(selectBottomSheetVisibility);

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
