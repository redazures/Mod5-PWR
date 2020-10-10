import React,{useState} from 'react';
import { FlatList, StyleSheet, View} from 'react-native';


//These are my components
import ListItems from '../components/lists/ListItems';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const Initialmessages = [
  {
    id: 1,
    title: 'You have got mail',
    description:'Yous not a smaht man. Some more random words to make this a little longer',
    image: require('../assets/nurse.jpeg'),
  },
  {
    id: 2,
    title: 'qhat does the fox say',
    description:'I said it',
    image: require('../assets/nurse.jpeg'),
  },
  {
    id: 3,
    title: 'just a little bit',
    description:'You need some free healthcare. this is some long long lie',
    image: require('../assets/nurse.jpeg'),
  },
];

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(Initialmessages)
  const [refreshing, setRefreshing] = useState(false)
  
  const handleDelete = message =>{
    console.log("deleting messages")
    const newMessages = messages.filter(m => m.id!==message.id) //2 lines to do this
    setMessages(newMessages)                                    //2 lines to do this
    setMessages(messages.filter(m => m.id!==message.id))
  }

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
            renderRightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={()=>{
          setMessages([
            {
              id: 2,
              title: 'Second Item',
              description:'I said it',
              image: require('../assets/nurse.jpeg'),
            },
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
});

export default MessagesScreen;
