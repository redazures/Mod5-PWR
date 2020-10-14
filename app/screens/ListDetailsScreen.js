import React, { useState } from "react";
import { View, Image, StyleSheet,Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import * as Yup from "yup";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItems";
import Screen from '../components/Screen'
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import listingsApi from '../api/listings'
import routes from "../components/navigation/routes";
import PatientLedgers from "../components/PatientLedgers"

import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";


  
const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    room: Yup.number().required().min(1).max(999).label("Room"),
});


function ListingDetailsScreen({ navigation, route }) {
    const listing = route.params;
    const [data, setData] = useState(listing.ledgers)
    const [addLog,setAddLog] =useState(false)

    const handleDelete = (log)=>{
        // console.log("what what",log,data.length)
        const newArray= data.filter(el=>el.id!==log.id)
        // console.log(newArray.length)
        setData(newArray)
        const result = listingsApi.deleteListings(log)
    }

    const editLedgerHandler= async (des,id)=>{ // console.log(foundObj)//console.log(newArray)
        // console.log("edit handler button is working",des,id)
        const foundObj= data.find(el=>el.id===id)
        foundObj.description=des
        let newArray = data.map(el=>el.id===id ? foundObj : el)
        setData(newArray)
        const result = await listingsApi.editListings(
            des,id
        )
        // if (!result.ok) return alert ('Could not save data at this time')
        // alert('success')
    }

    const addLedgerHandler=(room,des,id)=>{
        console.log("add handler button is working", des, room, id)
    }

    const renderItem = ({ item }) => (
        <PatientLedgers
            title={item.created_at.split("T")[0] + " at " + item.created_at.split("T")[1].split(".")[0]}
            subTitle={item.description}
            id={item.id}
            logo='arrow-left-bold'
            color={colors.danger}
            editLedgerHandler={editLedgerHandler}
            renderRightActions={()=>
                <ListItemDeleteAction onPress={()=>handleDelete(item)}/>
                }
        />
      )

      const ShowAddLedger=()=>{
        console.log(addLog)
        setAddLog(!addLog)
      }

return (
        <Screen View style={styles.detailsContainer}>
            <View style={styles.userContainer}>
                <ListItem
                    title={listing.name + " P#:" +listing.hospital_patient_id}
                    subTitle={listing.users[0].title+" "+listing.users[0].name}
                    logo='book'
                    color={colors.highlight}
                    onPress={ShowAddLedger}
                />
                {addLog ? 
                    <Form
                        initialValues={{ title: "", price: "", description: ""}}
                        onSubmit={()=>console.log("inside form of details screen")}
                        validationSchema={validationSchema}
                    >
                        <FormField
                            keyboardType="numeric"
                            maxLength={8}
                            name="room"
                            placeholder="Room"
                        />
                        <FormField
                            maxLength={255}
                            multiline
                            name="description"
                            numberOfLines={3}
                            placeholder="Description"
                        />
                        <SubmitButton title="Add Ledger" />
                    </Form>
                : 
                    null 
                    }
            </View>
            <FlatList
                    data={data}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ListItemSeparator}
                    keyExtractor={item => item.id.toString()}
                    
                />
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