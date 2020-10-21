import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../../screens/AccountScreen';
import MessagesScreen from '../../screens/MessagesScreen';
import MessageDetailsScreen from '../../screens/MessageDetailsScreen'


const Stack = createStackNavigator()

const AccountNavigator =()=>(
    <Stack.Navigator mode="modal">
        <Stack.Screen name ="Account" component={AccountScreen}/>
        <Stack.Screen name ="Messages" component={MessagesScreen} />
        <Stack.Screen name ="MessagesDetails" component={MessageDetailsScreen} />
    </Stack.Navigator>
)

export default AccountNavigator