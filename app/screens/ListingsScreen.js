import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card';
import ListItem from '../components/ListItem'
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';


const ListingsScreen = ({navigation}) => {
    const [listings, setListings] = React.useState([]);

    useEffect(() => {
        loadListings()
    }, [])

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        setListings(response.data)
    }
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings} 
            keyExtractor={listing => listing.id.toString()} 
            renderItem={({item}) => (
                <Card 
                    title={item.title} 
                    subTitle={'$' + item.price} 
                    imageUrl={item.images[0].url}
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                />
            )}  
        />

    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})