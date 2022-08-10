import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().min(4).required().label("Password"),
});
export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
            name="email"
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
             name="password"
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
            />
            <SubmitButton title="Login"/>
          </>
        )}
      </Formik>
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
