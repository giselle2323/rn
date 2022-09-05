import LottieView from "lottie-react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

export default ActivityIndicator;


const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        backgroundColor: "white",
        zIndex: 1,
        opacity: 0.8,
        height: "100%",
        width: "100%"
    }
})
