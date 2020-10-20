import React, {useEffect, useState}from "react";
import { View,Text, Switch,Button, Image } from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
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
import * as ImagePicker from 'expo-image-picker'
import  * as Permission from 'expo-permissions'
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AuthNavigator from "./app/components/navigation/AuthNavigator";
import NavigationTheme from "./app/components/navigation/NavigationTheme";
import AppNavigator from "./app/components/navigation/AppNavigator";
import AudioScreen from './app/screens/AccountScreen'
import AsyncStorage from "@react-native-community/async-storage";

export default function App() {

  const demo = async () =>{
    try{
      await AsyncStorage.setItem('person',JSON.stringify({id:1}))
      const value = await AsyncStorage.getItem('person')
      const person =JSON.parse(value)
      console.log(person)
    }catch (error){
      console.log(error)
    }
  }
  demo()
  console.log("render")
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator/>
    </NavigationContainer>
  )
}



{/* <NavigationContainer theme={NavigationTheme}>
      <AppNavigator/>
    </NavigationContainer> */}

    // <NavigationContainer theme={NavigationTheme}>
    //   <TestScreen/>
    // </NavigationContainer>

