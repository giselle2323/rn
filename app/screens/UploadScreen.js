import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
          onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
  },
});

export default UploadScreen;
