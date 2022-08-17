import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Button, Image, StyleSheet, Switch, Text, TextInput } from "react-native";

import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/screens/Screen";

export default function App() {

  return (
    <ListingEditScreen />
  );
}
