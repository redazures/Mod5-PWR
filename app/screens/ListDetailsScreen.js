import React from "react";
import { View, Image, StyleSheet,Text } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItems";
import BodyText from "../components/BodyText";
import { FlatList } from "react-native-gesture-handler";
import listings from "../api/listings";
import Screen from '../components/Screen'
import ListItemSeparator from "../components/lists/ListItemSeparator";
  
  const renderItem = ({ item }) => (
    <BodyText>{item.description + " on " + item.created_at.split("T")[0] + " at " + item.created_at.split("T")[1].split(".")[0]}</BodyText>
  );

function ListingDetailsScreen({ route }) {
const listing = route.params;
const ledgers = listing.ledgers.reverse()   
console.log(ledgers[0].created_at.split("T")[0])

return (
        <Screen View style={styles.detailsContainer}>
            <FlatList
                data={ledgers}
                renderItem={renderItem}
                ItemSeparatorComponent={ListItemSeparator}
                keyExtractor={item => item.id.toString()}
            />
        <View style={styles.userContainer}>
            <ListItem
                title={listing.users[0].name + " - Main Professional"}
                subTitle={listing.users[0].title}
            />
        </View>
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