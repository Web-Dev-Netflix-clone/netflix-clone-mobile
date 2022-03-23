import { Provider } from "react-redux";
import { store } from "./src/state/store";
import { Navigation, RootNavigator } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import useCachedResources from "./src/hooks/useCachedResources";
import StartupScreen from "./src/screens/StartupScreen";
import { useState } from "react";
import Modal from "react-native-modal";
import { StyleSheet } from "react-native";
import BottomSheet from "./src/components/BottomSheet";

export default function App() {
  return <MainScreen />;
}

const MainScreen = () => {
  const isLoaded = useCachedResources();
  const [isVisible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  if (isLoaded) {
    return (
      <Provider store={store}>
        <Navigation />
        <StatusBar style="light" />
        <Modal
          coverScreen={false}
          hasBackdrop={false}
          style={styles.view}
          isVisible={isVisible}
        >
          <BottomSheet toggleModal={toggleModal} />
        </Modal>
      </Provider>
    );
  } else {
    return <StartupScreen />;
  }
};
const styles = StyleSheet.create({
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
