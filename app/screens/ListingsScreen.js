import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'

import routes from '../components/navigation/routes'
import PatientCard from '../components/PatientCard'
import Screen from '../components/Screen'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import BodyText from '../components/BodyText'
import AppButton from '../components/Button'



export default function ListingsScreen({navigation}) {

    const [listings, setListings] = useState([])
    const [error, setError] = useState(false)
    // const [oading, setLoading] = useState(false)

    useEffect(()=>{
        loadlistings()
    }, [])

    const loadlistings = async () =>{
        // setLoading(true)
        const response = await listingsApi.getListings();
        // setLoading(false)
        console.log(response)
        if (!response.ok) return setError(true) //console.log(response.problem) // console.log(response.data)
        setError(false)
        setListings(response.data)
    }
    
    return (
        <Screen style={styles.screen}>
            {error && <>
                <BodyText>Couldn't retrieve data</BodyText>
                <AppButton title='Retry' onPress={()=>{
                    console.log("try again")
                    loadlistings
                }}/>
            </>}
            
            <FlatList
                data={listings}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>(
                    <PatientCard
                        title={item.title}
                        subTitle={"$"+item.price}
                        imageUrl={item.images[0].url}
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
