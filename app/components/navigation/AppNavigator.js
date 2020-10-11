import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//import AccountNavigator from "./AccountNavigator";
//import FeedNavigator from "./FeedNavigator";
//import NewListingButton from "./NewListingButton";
//import routes from "./routes";
import ListingsScreen from "../../screens/ListingsScreen";
import ListingEditScreen from "../../screens/ListEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListinButton from "./NewListinButton";
import routes from "./routes";

const Tab = createBottomTabNavigator()

const AppNavigator = () =>(
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} 
            options={{
                tabBarIcon:({color,size})=>
                <MaterialCommunityIcons name="hospital-building" color={color} size={size}/>
            }}/>
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} 
            options={({navigation})=>({
                tabBarButton:()=>
                    <NewListinButton onPress={()=>navigation.navigate(routes.LISTING_EDIT)}/>,
                tabBarIcon:({color,size})=>
                <MaterialCommunityIcons name="plus-circle" color={color} size={size}/>
            })}/>
        <Tab.Screen name="Account" component={AccountNavigator}
        options={{
            tabBarIcon:({color,size})=>
            <MaterialCommunityIcons name="briefcase-account" color={color} size={size}/>
        }}/>
    </Tab.Navigator>
)

export default AppNavigator