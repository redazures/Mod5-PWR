import React, {useState}from "react";
import { View,Text } from "react-native";
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

export default function App() {
  const[firstName, setFirstName] = useState('')
  console.log("render");
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput placeholder='First Name'
        clearButtonMode="always"
        onChangeText={text=>setFirstName(text)}
        style={{
          borderBottomColor:'#ccc',
          borderBottomWidth:1,
        }}
      />
    </Screen>
  );
}
