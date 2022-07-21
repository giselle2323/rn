import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 30,
    left: 40,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
