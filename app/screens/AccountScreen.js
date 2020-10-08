import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItems from "../components/ListItems";
import colors from "../config/colors";
import Icon from '../components/Icon'

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItems
          title="Jimbo Chan"
          subTitle="Meko"
          image={require("../assets/doggie.png")}
        />
      </View>
      <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <ListItems
            title={item.title} 
            ImageComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
            }
          />
        )}
      />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
