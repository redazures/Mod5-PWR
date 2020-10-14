import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../../screens/ListingsScreen';
import ListingDetailsScreen from '../../screens/ListDetailsScreen';
import LedgerEditScreen from '../../screens/LedgerEditScreen'

const Stack = createStackNavigator()

const FeedNavigator =()=>(
    <Stack.Navigator mode="modal">
        <Stack.Screen name ="Listings" component={ListingsScreen} options={{headerShown:false}}/>
        <Stack.Screen name ="ListingDetails" component={ListingDetailsScreen} />
        <Stack.Screen name ="LedgerEdit" component={LedgerEditScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator
