import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import PatientCard from '../components/PatientCard'
import Screen from '../components/Screen'

export default function ListingsScreen() {
    
    const listings=[
        {
            id:1,
            title: 'red jacket for sale',
            price: 100,
            image: require('../assets/favicon.png')
        },
        {
            id:2,
            title: 'gogo power rangers',
            price: 1000,
            image: require('../assets/doggie.png')
        },
    ]
    
    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>(
                    <PatientCard
                        title={item.title}
                        subTitle={"$"+item.price}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
