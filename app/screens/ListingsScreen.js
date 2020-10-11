import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import routes from '../components/navigation/routes'

import PatientCard from '../components/PatientCard'
import Screen from '../components/Screen'
import colors from '../config/colors'

export default function ListingsScreen({navigation}) {
    
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
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>(
                    <PatientCard
                        title={item.title}
                        subTitle={"$"+item.price}
                        image={item.image}
                        onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light,
    }
})
