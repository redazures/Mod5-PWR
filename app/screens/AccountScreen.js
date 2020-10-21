import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItems from "../components/lists/ListItems";
import colors from "../config/colors";
import Icon from '../components/Icon'
import ListItemSeparator from "../components/lists/ListItemSeparator";
import AuthContext from '../auth/context'


const menuItems = [
    {
        id:1,
        title: "My Patients",
        icon: {
            name: "account-box-multiple",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "message-bulleted",
            backgroundColor: colors.secondary,
        },
        targetScreen:"Messages"
    },
];

export default function AccountScreen({navigation}) {
  const authContext = useContext(AuthContext)


  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title="Beth Isreal Hospital"
          subTitle="Cardiology"
          logo={null}
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
                <Icon name={item.icon.name} backgroundColor={colors.primary}/>
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
        onPress={()=>{
          console.log("this is log out")
          authContext.setUser()
          }
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
