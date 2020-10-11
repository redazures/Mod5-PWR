import React, {useEffect, useState}from "react";
import { View,Text, Switch,Button, Image } from "react-native";

import Screen from "./app/components/Screen";

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function App() {

  const Link=()=>{
    const navigation = useNavigation()

    return(
      <Button
        title='click'
        onPress={()=>{
          console.log("inside link")
          navigation.navigate('TweetDetails')
        }}
      />
    )

  }

  const Tweets =({navigation})=>(
    <Screen>
        <Text>Tweet Main Page Hola</Text>
        <Button
        title='click'
        onPress={()=>{
          console.log("inside tweets")
          navigation.navigate('TweetDetails',{id:1})
        }}
        />
    </Screen>
  )
//can pass entire objects in the 2 paramenter of navigate

  const TweetDetails =({route})=>(
    <Screen>
        <Text>Tweet Details to here. I got lots to say!{route.params.id}</Text>
    </Screen>
  )

  const Stack = createStackNavigator();
  const StackNavigator = ()=>(
      <Stack.Navigator 
        screenOptions={{
          headerStyle:{backgroundColor:'red'},
          headerTintColor:'white'
          }}>
        <Stack.Screen name='Tweets' component={Tweets} />
        <Stack.Screen name='TweetDetails' component={TweetDetails}/>
      </Stack.Navigator>
  )

  const Account=()=>(
    <Screen>
      <Text>Account</Text>
    </Screen>
  )
    
  const Tab = createBottomTabNavigator()
  const TabNavigator = () => (
    <Tab.Navigator tabBarOptions={{
      activeBackgroundColor:'tomato',
      activeTintColor:'white',
      inactiveBackgroundColor:'lightgrey',
      inactiveTintColor:'black'
    }}>
      <Tab.Screen 
        name="Feed" 
        component={Tweets} 
        options=
          {{tabBarIcon:({size,color})=>
          <MaterialCommunityIcons name='home' size={size} color={color}/>}}/>
      <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
  )

  console.log("render")
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
