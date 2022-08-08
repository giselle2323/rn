import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Switch, Text, TextInput } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/screens/Screen";

export default function App() {

  const [isNew, setIsNew] = React.useState(false); 

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon='email' placeholder="Email" />
    </Screen>
  );
}
