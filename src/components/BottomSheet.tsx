import { StyleSheet, Button, Dimensions } from "react-native";
import React, { useCallback, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
export const MAX_TRANSLATE_Y = -SCREEN_HEIGHT / 3;

const BottomSheet = () => {
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);

  const toggleBottomSheet = useCallback((destination: number) => {
    "worklet";
    active.value = destination !== 0;

    translateY.value = withTiming(destination);
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useEffect(() => {
    toggleBottomSheet(MAX_TRANSLATE_Y);
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
      <Button title="Close" onPress={() => toggleBottomSheet(0)} />
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 20,
  },
});
