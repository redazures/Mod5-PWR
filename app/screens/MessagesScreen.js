import React,{useState, useEffect, useContext} from 'react';
import { FlatList, StyleSheet, TextInput, View} from 'react-native';


//These are my components
import ListItems from '../components/lists/ListItems';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import AuthContext from '../auth/context';
import useApi from '../components/hooks/useApi';
import listingsApi from '../api/listings';
import jwtDecode from 'jwt-decode'
import routes from '../components/navigation/routes'
import { useIsFocused } from '@react-navigation/native';


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

const MessagesScreen = ({navigation,route}) => {
  const [messages, setMessages] = useState(Initialmessages)
  const [refreshing, setRefreshing] = useState(false)
  const authContext = useContext(AuthContext)
  const getListingApi=useApi(listingsApi.getMessages)
  const user = jwtDecode(authContext.user)
  const token = authContext.user
  const isFocused  = useIsFocused()
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(()=>{
    // console.log("this is in my use effect",user,token)
    getListingApi.request(user.user_id,token)
  },[isFocused])
  
  const handleDelete = message =>{
    console.log("deleting messages")
    const newMessages = messages.filter(m => m.id!==message.id) //2 lines to do this
    setMessages(newMessages)                                    //2 lines to do this
    setMessages(messages.filter(m => m.id!==message.id))
  }


  const searchHandler=(term)=>{
    setSearchTerm(term)
}

  const messageHandler=()=>{
    return getListingApi.data ? getListingApi.data.all_messages?.filter(el=>el.correspondent.name.toLowerCase().includes(searchTerm.toLowerCase())) : messages
  }

  // console.log("this is my messages",getListingApi.data)
  return (
    <Screen>
      <TextInput 
        onChangeText={searchHandler} 
        placeholder="Type A Name To search"
      />
      <FlatList
        data={messageHandler()}
        keyExtractor={item => item.correspondent.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.correspondent.name} 
            onPress={()=>navigation.navigate(routes.MESSAGES_DETAILS,item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={()=>{
          getListingApi.request(user.user_id,token)
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
