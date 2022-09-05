import Constants from "expo-constants";

const env = {
  dev: {
    apiUrl: "http://192.168.0.159:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.0.159:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.0.159:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    console.log(__DEV__);
    return env.dev;
  }
  if (Constants.manifest.releaseChannel === "staging") {
    return env.staging;
  } else return env.prod;
};

export default getCurrentSettings;
