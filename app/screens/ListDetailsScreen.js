import React, { useState } from "react";
import { View, Image, StyleSheet,Text } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItems";
import BodyText from "../components/BodyText";
import { FlatList } from "react-native-gesture-handler";
import Screen from '../components/Screen'
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import { useEffect } from "react";
import listingsApi from '../api/listings'
  

function ListingDetailsScreen({ navigation, route }) {
    const listing = route.params;
    const[editLedger, useEditLedger]=useState(false)

    const [removedItems, setRemovedItems] = useState([])
    // console.log(logs)

    const filterlogs=()=>{
        let logs = listing.ledgers
        return logs
    }

    // console.log("render details screen", removedItems)

    const handleDelete = (log)=>{
        // console.log("what what",removedItems.length)
        const result = listingsApi.deleteListings(log)
    }  

    const renderItem = ({ item }) => (
        <ListItem
            title={item.created_at.split("T")[0] + " at " + item.created_at.split("T")[1].split(".")[0]}
            subTitle={item.description}
            logo='chevron-left'
            onPress={()=>{
                console.log("onpress action",navigation)
                useEditLedger(!editLedger)
            }}
            renderRightActions={()=>
                <ListItemDeleteAction onPress={()=>handleDelete(item)}/>
                }
        />
      );
return (
        <Screen View style={styles.detailsContainer}>
            <View style={styles.userContainer}>
                <ListItem
                    title={listing.users[0].name + " - Main Professional"}
                    subTitle={listing.users[0].title}
                />
            </View>
            <FlatList
                    data={filterlogs()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ListItemSeparator}
                    keyExtractor={item => item.id.toString()}
                    
                />
        </Screen>
);
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;

//<Image style={styles.image} source={{uri: listing.images[0].url}} />