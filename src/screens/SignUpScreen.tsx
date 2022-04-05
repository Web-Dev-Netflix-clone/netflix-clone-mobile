import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/navigation";
import { TYPOGRAPHY } from "../global/styles/typography";
import { GLOBAL } from "../global/styles/global";
import { Button, TextInput, Checkbox } from "react-native-paper";

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Ready to watch unlimited movies and shows?
        </Text>
        <Text style={styles.text}>
          Create an account and we will send you an email with everything you
          need to know about Netflix.
        </Text>
      </View>
      <View
        style={{
          marginBottom: GLOBAL.SPACING.md,
          paddingTop: GLOBAL.SPACING.xxl,
        }}
      >
        <TextInput
          label="Email"
          mode="outlined"
          autoComplete=""
          style={{ backgroundColor: "white" }}
          placeholderTextColor="#fff"
          outlineColor="gray"
          activeOutlineColor="green"
          selectionColor="#fff"
        />
        <TextInput
          label="Password"
          mode="outlined"
          autoComplete=""
          style={{ backgroundColor: "white" }}
          outlineColor="gray"
          activeOutlineColor="red"
          selectionColor="#fff"
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={!checked ? "checked" : "unchecked"}
          uncheckedColor="gray"
          color="blue"
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.text}>
          Yes, send me special offers from Netflix (Optional)
        </Text>
      </View>
      <Button
        style={styles.button}
        color="red"
        mode="contained"
        onPress={() => navigation.navigate("Signin")}
      >
        Continue
      </Button>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GLOBAL.SPACING.md,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  header: {
    color: "black",
    marginBottom: 10,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    fontSize: TYPOGRAPHY.FONT_SIZES.lg,
  },
  text: {
    color: TYPOGRAPHY.COLOR.Grey,
    fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
    fontSize: TYPOGRAPHY.FONT_SIZES.md,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: 2,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
  },
});
