import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

export default function SubmitButton() {
    const { handleSubmit } = useFormikContext();
  return <AppButton title="Login" onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
