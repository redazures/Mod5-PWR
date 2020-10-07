import React from "react";
import { View } from "react-native";
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Patients from "./app/screens/Patients";


export default function App() {

  console.log("render")
  return (
    <Patients/>
  );

}


