import React from "react";
import { Pressable, Image, Text, View } from "react-native";

import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import netflixLogo from "../../assets/netflix-logos/netflix-logo-2560x1440.png";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { TYPOGRAPHY } from "../global/styles/typography";
import { IMGSTYLES } from "../global/styles/imgStyles";
import { AuthStackParams } from "./navigation";
import { GLOBAL } from "../global/styles/global";
const AuthStack = createStackNavigator<AuthStackParams>();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: true,
          title: "",
          headerLeft: () => (
            <Image
              style={[IMGSTYLES.headerLogo, { marginLeft: -15 }]}
              source={netflixLogo}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: "70%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => alert("Privacy Pressed!")}>
                <Text style={GLOBAL.TEXT.Secondary}>PRIVACY</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Signin");
                }}
              >
                <Text style={GLOBAL.TEXT.Secondary}>LOGIN</Text>
              </Pressable>
              <Pressable onPress={() => alert("Ellipsis Pressed!")}>
                <Ionicons name="ellipsis-vertical" size={20} color="black" />
              </Pressable>
            </View>
          ),
        })}
      />
      <AuthStack.Screen
        name="Signin"
        component={SignInScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: true,
          title: "",
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Black,
          },
          headerLeft: () => (
            <Pressable
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={TYPOGRAPHY.COLOR.White}
              />
              <Image
                style={[IMGSTYLES.headerLogo, { marginLeft: -15 }]}
                source={netflixLogo}
              />
            </Pressable>
          ),
        })}
      />
    </AuthStack.Navigator>
  );
};
