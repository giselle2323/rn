import * as React from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = React.useState();
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const lastKnownPosition = await Location.getLastKnownPositionAsync();
      if (!lastKnownPosition) {
        return;
      }
      const { latitude, longitude } = lastKnownPosition.coords;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getLocation();
  });

  return location;
};
