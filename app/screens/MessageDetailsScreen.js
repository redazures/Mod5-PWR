import React,{useState,useContext} from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import jwtDecode from 'jwt-decode'
import * as Yup from "yup";


//These are my components
import ListItems from '../components/lists/ListItems';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import AuthContext from '../auth/context'
import colors from '../config/colors'
import { AppForm as Form, AppFormField as FormField, SubmitButton } from "../components/forms";
import listingsApi from '../api/listings';

const validationSchema = Yup.object().shape({
  content: Yup.string().required().min(1).label("Content"),
});

const MessagesScreen = ({navigation, route}) => {
  // const [messages, setMessages] = useState(Initialmessages)
  const [messages, setMessages] = useState(route.params.messages)
  const [refreshing, setRefreshing] = useState(false)
  const authContext = useContext(AuthContext)
  const user = jwtDecode(authContext.user)
  const correspondent = route.params.correspondent.name
  const correspondent_id = route.params.correspondent.id
  // let lastId=messages[messages.length-1].id ? messages[messages.length-1].id : 0

  const handleAdd = async (values,{resetForm}) =>{
    // console.log("this is my message sender",values.content, user.user_id, correspondent_id, lastId)
    const user_id = user.user_id
    const result = await listingsApi.addMessages(user_id,correspondent_id,values.content,authContext.user)
    // const newMessage = {
    //   id:lastId+100,
    //   sender_id:user_id,
    //   content:values.content,
    // }
    // lastId = lastId+100
    // console.log(newMessage)
    const newMessage = result.data
    console.log(newMessage)
    let newArray = [...messages,newMessage]
    setMessages(newArray)
    resetForm()
  }

  const handleDelete = message =>{
    console.log("deleting messages")
    const newMessages = messages.filter(m => m.id!==message.id) //2 lines to do this
    setMessages(newMessages)                                    //2 lines to do this
    setMessages(messages.filter(m => m.id!==message.id))
  }

  // console.log("this is my messages",user, route.params.correspondent.name)
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            subTitle={item.sender_id===user.user_id ? "You: "+item.content : correspondent+": " +item.content }
            onPress={()=>console.log("you have pushed on the button")}
            logo={null}
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
      <Form
          initialValues={{content:""}}
          onSubmit={handleAdd}
          validationSchema={validationSchema}
      >
        <View style={styles.container}>
            <FormField
                maxLength={255}
                multiline
                name="content"
                numberOfLines={3}
                placeholder="Please send a message"
                width="90%"
            />
          <View width='9%' paddingLeft={5}>
              <SubmitButton title="S"/>
          </View>
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flexDirection: "row",
    padding: 10,
    backgroundColor:colors.secondary,
    borderRadius:15
  },
  detailsContainer: {
    marginLeft:10,
    flex:1,
    justifyContent:'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.black,
  },
  title: {
    fontWeight: "700",
    color: colors.black,
  },
});

export default MessagesScreen;