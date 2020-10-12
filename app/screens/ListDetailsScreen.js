import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItems";
import BodyText from "../components/BodyText";

function ListingDetailsScreen({ route }) {
const listing = route.params;
console.log(listing)
return (
    <View>
        <Image style={styles.image} source={{uri: listing.images[0].url}} />
        <View View style={styles.detailsContainer}>
            <BodyText style={styles.title}>{listing.title}</BodyText>
            <BodyText style={styles.price}>${listing.price}</BodyText>
            <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/doggie.png")}
                    title="Mosh Hamedani"
                    subTitle="5 Listings"
                />
            </View>
        </View>
    </View>
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