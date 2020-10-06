import React from "react";
import { View } from "react-native";
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";


export default function App() {

  console.log("render")
  return (
    <WelcomeScreen/>
  );

}


