import React, {useState}from "react";
import { View,Text, Switch } from "react-native";
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
import ListItems from "./app/components/ListItems";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";

import colors from './app/config/colors'
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const[isNew, setIsNew] = useState(false)
  console.log("render");
  return (
    <Screen>
        <AppPicker icon="apps" placeholder="category"/>
        <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}
