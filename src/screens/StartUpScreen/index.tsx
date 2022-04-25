import React, { useEffect } from "react";
import { Dimensions, Image, View, StyleSheet } from "react-native";
import { TYPOGRAPHY } from "../../global/styles/typography";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { withBouncing } from "./components/withBouncing";

const { height, width } = Dimensions.get("window");
const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 100;
const VELOCITY = 180;

const StartupScreen = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateX.value = withBouncing(VELOCITY, 0, width - LOGO_WIDTH);
    translateY.value = withBouncing(VELOCITY, 0, height - LOGO_HEIGHT);
  });

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={style}>
        <Image
          style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
          source={require("../../../assets/netflix-logos/netflix-logo-2560x1440.png")}
        />
      </Animated.View>
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Black,
  },
});
