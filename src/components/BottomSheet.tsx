//@ts-nocheck
import { StyleSheet } from "react-native";
import React from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";
import BottomSheetContent from "./BottomSheetContent";

const BottomSheet = () => {
  const { showBottomSheet } = useActions();
  const bottomSheetVisible = useSelector(
    (state) => state.appState.showBottomSheet
  ); //state.appState is throwing ts error ?

  return (
    <Modal
      coverScreen={false}
      hasBackdrop={false}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
      isVisible={bottomSheetVisible}
    >
      <BottomSheetContent />
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
