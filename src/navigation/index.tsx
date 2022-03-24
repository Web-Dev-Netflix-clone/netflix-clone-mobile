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

const navTheme = DefaultTheme;
navTheme.colors.background = "transparent";
export const Navigation = () => {
  const isSignedIn = useSelector((state) => state.userData.isLoggedIn);

  return (
    <NavigationContainer theme={navTheme}>
      {!isSignedIn ? <LoginStack /> : <DrawerTabNavigator />}
      {/* <RootNavigator /> */}
      <BottomSheet />
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
