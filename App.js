import { StatusBar } from "expo-status-bar";
import * as React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  Image,
} from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/screens/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = React.useState();
  const requestPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need permission");
  };
  React.useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("error reading image");
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
