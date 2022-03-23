import { Provider } from "react-redux";
import { store } from "./src/state/store";
import { Navigation } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import useCachedResources from "./src/hooks/useCachedResources";
import StartupScreen from "./src/screens/StartupScreen";
import { useState } from "react";
import { StyleSheet } from "react-native";

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
