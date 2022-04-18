import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import BottomSheetContent from './components/BottomSheetContent';

import { selectBottomSheetVisibility } from '../../state/selectors/selectors';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../state';
import { useActions } from '../../hooks/useActions';

const BottomSheet = () => {
  const navigation = useNavigation();
  const { hideBottomSheet } = useActions();
  const bottomSheetVisible = useSelector(selectBottomSheetVisibility);
  const bottomSheetMovie = useSelector(
    (state: RootState) => state.movies.bottomSheetMovie
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
      <Pressable
        style={{ zIndex: 0 }}
        onPress={() => {
          //@ts-ignore
          navigation.navigate('MovieDetail', bottomSheetMovie);
          hideBottomSheet();
        }}>
        <BottomSheetContent />
      </Pressable>
    </Modal>
  );
};

export default BottomSheet;
