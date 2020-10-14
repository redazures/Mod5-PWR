import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import SearchInput, { createFilter } from 'react-native-search-filter';

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
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        getListingsApi.request()
        // console.log("I am in my use effect")
    }, [route])

    const searchUpdated=()=>{
        return getListingsApi.data.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase()))////console.log("this is filtered",joe.length) 
    }

    const searchHandler=(term)=>{
        setSearchTerm(term)
    }
    
    // console.log(searchUpdated().length)
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
            <SearchInput 
                onChangeText={searchHandler} 
                style={styles.searchInput}
                placeholder="Type a message to search"
            />
            <FlatList
                data={searchUpdated(searchTerm)}
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
