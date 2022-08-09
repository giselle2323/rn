import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "./Screen";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCaptitalize="none"
        icon="email"
        placeholder="Email"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCaptitalize="none"
        icon="lock"
        placeholder="Password"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => console.log("cat")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
