import React, { useEffect, useState, useContext  } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, TextInput } from 'react-native'

import routes from '../components/navigation/routes'
import PatientCard from '../components/PatientCard'
import Screen from '../components/Screen'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import BodyText from '../components/BodyText'
import AppButton from '../components/Button'
import useApi from '../components/hooks/useApi'
import AuthContext from '../auth/context'
import { useIsFocused } from '@react-navigation/native'

export default function ListingsScreen({navigation, route}) {
    const authContext = useContext(AuthContext)
    const [refreshing, setRefreshing] = useState(false)
    const getListingsApi = useApi(listingsApi.getData)
    const [searchTerm, setSearchTerm] = useState("")
    const isFocused  = useIsFocused()
    
    useEffect(()=>{
        getListingsApi.request(authContext.user)
    }, [isFocused])

    const searchUpdated=()=>{
        return getListingsApi.data.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase()))////console.log("this is filtered",joe.length) 
    }

    const searchHandler=(term)=>{
        setSearchTerm(term)
    }
    
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
            <TextInput 
                onChangeText={searchHandler} 
                placeholder="Type A Name To search"
            />
            <FlatList
                data={searchUpdated(searchTerm)}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>(
                    <PatientCard
                        title={item.name}
                        id={item.id}
                        subTitle={item.main_practitioner}
                        //imageUrl={it  em.images[0].url}
                        onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
                    />
                )}
                refreshing={refreshing}
                onRefresh={()=>getListingsApi.request(authContext.user)}
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
