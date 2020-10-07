import React from "react";
import { View } from "react-native";
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Patient from "./app/screens/Patient";
import PatientList from "./app/screens/PatientList";
import MessagesScreen from "./app/screens/MessagesScreen.js";


export default function App() {

  console.log("render")
  return (
    <MessagesScreen/>
  );

}


