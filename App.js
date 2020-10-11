import React, {useEffect, useState}from "react";
import { View,Text, Switch,Button, Image } from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Patient from "./app/screens/Patient";
import PatientList from "./app/screens/PatientList";
import MessagesScreen from "./app/screens/MessagesScreen.js";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/lists/ListItems";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "./app/components/TextInput";

import colors from './app/config/colors'
import AppPicker from "./app/components/Picker";
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import ListEditScreen from './app/screens/ListEditScreen'
// import * as ImagePicker from 'expo-image-picker'
import  * as Permission from 'expo-permissions'
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

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
    
  console.log("render")
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  );
}
