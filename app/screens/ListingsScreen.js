import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'

import routes from '../components/navigation/routes'
import PatientCard from '../components/PatientCard'
import Screen from '../components/Screen'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import BodyText from '../components/BodyText'
import AppButton from '../components/Button'
import useApi from '../components/hooks/useApi'



export default function ListingsScreen({navigation, route}) {
    const [refreshing, setRefreshing] = useState(false)
    const getListingsApi = useApi(listingsApi.getListings)

    useEffect(()=>{
        getListingsApi.request()
        console.log("I am in my use effect")
    }, [route])

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <BodyText>Couldn't retrieve data</BodyText>
                <AppButton title='Retry' onPress={()=>{
                    console.log("try again")
                    getListingsApi.loadlistings
                }}/>
            </>}
            {getListingsApi.loading && <ActivityIndicator animating={getListingsApi.loading} size={80}/>}
            <FlatList
                data={getListingsApi.data}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>(
                    <PatientCard
                        title={item.name}
                        subTitle={"Room " + item.ledgers.slice(-1)[0].current_room}
                        //imageUrl={item.images[0].url}
                        onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
                    />
                )}
                refreshing={refreshing}
                onRefresh={()=>getListingsApi.request()}
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
