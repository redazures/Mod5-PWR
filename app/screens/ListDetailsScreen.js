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
import routes from "../components/navigation/routes";
  

function ListingDetailsScreen({ navigation, route }) {
    const listing = route.params;
    const [data, setData] = useState(listing.ledgers)
    

    const handleDelete = (log)=>{
        console.log("what what",log,data)
    
        //const result = listingsApi.deleteListings(log)
    }


    const renderItem = ({ item }) => (
        <ListItem
            title={item.created_at.split("T")[0] + " at " + item.created_at.split("T")[1].split(".")[0]}
            subTitle={item.description}
            logo='arrow-left-bold'
            color={colors.danger}
            onPress={()=>{
                navigation.navigate(routes.LEDGER_EDIT,item)
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
                    title={listing.name + " P#:" +listing.hospital_patient_id}
                    subTitle={listing.users[0].title+" "+listing.users[0].name}
                    logo='book'
                    color={colors.highlight}
                />
            </View>
            <FlatList
                    data={data}
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