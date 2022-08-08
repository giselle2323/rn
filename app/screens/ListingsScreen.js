import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card';
import ListItem from '../components/ListItem'
import colors from '../config/colors';
import Screen from './Screen';

const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Chair  for sale",
        price: 500,
        image: require('../assets/chair.jpg')
    },
    {
        id: 3,
        title: "Couch in great condition for sale",
        price: 300,
        image: require('../assets/jacket.jpg')
    }
]
const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings} 
            keyExtractor={listing => listing.id.toString()} 
            renderItem={({item}) => (
                <Card 
                    title={item.title} 
                    subTitle={'$' + item.price} 
                    image={item.image} 
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