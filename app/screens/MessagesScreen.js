import React from 'react';
import { FlatList, StyleSheet} from 'react-native';

//These are my components
import ListItems from '../components/ListItems';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'

const messages = [
  {
    id: 1,
    title: 'First Item',
    description:'Yous not a smaht man',
    image: require('../assets/nurse.jpeg'),
  },
  {
    id: 2,
    title: 'Second Item',
    description:'I said it',
    image: require('../assets/nurse.jpeg'),
  },
  {
    id: 3,
    title: 'Third Item',
    description:'You need some free healthcare',
    image: require('../assets/nurse.jpeg'),
  },
];

const MessagesScreen = (props) => {

  console.log("this is my messages")
  return (
    <Screen style>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title} 
            subTitle={item.description}
            image={item.image}
            onPress={()=>console.log("Message selected",item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
});

export default MessagesScreen;
