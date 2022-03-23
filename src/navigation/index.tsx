import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import { RootStackParams } from "./navigation";
import { DrawerTabNavigator } from "./Drawer";
import { LoginStack } from "./AuthStack";
import { useSelector } from "../hooks/useTypedSelector";
import BottomSheet from "../components/BottomSheet";
import Modal from "react-native-modal";
import { useActions } from "../hooks/useActions";

const navTheme = DefaultTheme;
navTheme.colors.background = "transparent";
export const Navigation = () => {
  const { showBottomSheet } = useActions();
  const isSignedIn = useSelector((state) => state.userData.isLoggedIn);
  const bottomSheetVisible = useSelector(
    (state) => state.appState.showBottomSheet
  );

  return (
    <NavigationContainer theme={navTheme}>
      {isSignedIn ? <LoginStack /> : <DrawerTabNavigator />}
      <Modal
        coverScreen={true}
        hasBackdrop={false}
        // style={styles.view}
        isVisible={bottomSheetVisible}
      >
        <BottomSheet />
      </Modal>
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParams>();

// For Dev purposes
export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "",
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "",
          headerTransparent: true,
        })}
      />
    </Stack.Navigator>
  );
};
