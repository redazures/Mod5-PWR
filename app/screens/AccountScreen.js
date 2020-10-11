import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItems from "../components/lists/ListItems";
import colors from "../config/colors";
import Icon from '../components/Icon'
import ListItemSeparator from "../components/lists/ListItemSeparator";

const menuItems = [
    {
        id:1,
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen:"Messages"
    },
];

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
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
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItems
            title={item.title} 
            IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
            }
            onPress={ ()=>{
              item.targetScreen ? console.log("this is item", item.targetScreen) : null
              item.targetScreen ? navigation.navigate(item.targetScreen) : null
            }}
          />
        )}
      />
      </View>
      <ListItems
        title="Log Out"
        ImageComponent={
            <Icon name='logout' backgroundColor='#ffe66d'/>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen:{
    backgroundColor:colors.light,
  },
});
