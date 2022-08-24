import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

const ListingsScreen = ({ navigation }) => {

  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

  React.useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldnt retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      {loading && <ActivityIndicator visible={true}/>}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
