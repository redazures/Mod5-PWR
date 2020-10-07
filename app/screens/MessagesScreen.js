import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'


import Patient from '../screens/Patient'
export default function MessagesScreen() {

    const messages = [
        {
          id: 1,
          title: "T1",
          description: "D1",
          image: require("../assets/nurse.jpeg"),
        },
        {
          id: 2,
          title: "T2",
          description: "D2",
          image: require("../assets/nurse.jpeg"),
        },
      ]

      console.log("this is my messages screen", messages[0].id)
    return (
        <View>
            <Text>something</Text>
            <Text>{messages[0].title}</Text>
            <Text>{messages[0].id}</Text>
            <Text>{messages[0].description}</Text>
            <Image source={messages[0].image}/>
            <FlatList 
                Data={messages}
                keyExtractor={(message)=>message.id.toString()}
                renderItem={({ item }) => (<Text>{item.title}</Text>)}
            />
        </View>
    );
}

const styles = StyleSheet.create({})
