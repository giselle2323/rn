import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Switch, Text, TextInput } from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {

  return (
    <MessagesScreen />
  );
}
