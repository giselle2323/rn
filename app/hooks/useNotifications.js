import * as React from "react";
import * as Permissions from 'expo-permissions';
import * as Notifications from "expo-notifications";
import expoPushTokensApi  from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  
  React.useEffect(() => {
    registerForPushNotifications();
    if(notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener);
  }, []);
  const registerForPushNotifications = async () => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (!permission.granted) return;

    try {
      const token = await Notifications.getExpoPushTokenAsync();

      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting token", error);
    }
  };
};

