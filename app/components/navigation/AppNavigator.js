import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//import AccountNavigator from "./AccountNavigator";
//import FeedNavigator from "./FeedNavigator";
//import NewListingButton from "./NewListingButton";
//import routes from "./routes";
import ListingsScreen from "../../screens/ListingsScreen";
import ListingEditScreen from "../../screens/ListEditScreen";
import AccountScreen from "../../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator()

const AppNavigator = () =>(
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator}/>
        <Tab.Screen name="ListingEdit" component={ListingEditScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
)

export default AppNavigator