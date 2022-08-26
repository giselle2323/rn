import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={text => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}  />
    </>
  );
}

const styles = StyleSheet.create({});
