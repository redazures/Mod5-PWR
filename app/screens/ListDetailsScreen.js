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
    room: Yup.number().required().min(1).max(999).label("Room"),
    description: Yup.string().required().min(1).label("Description"),
});


function ListingDetailsScreen({ navigation, route }) {
    const listing = route.params;
    const [data, setData] = useState(listing.ledgers.sort((a,b)=>{return b.id-a.id}))
    const [addLog,setAddLog] =useState(false)

    const handleDelete = (log)=>{
        const newArray= data.filter(el=>el.id!==log.id)
        setData(newArray)
        const result = listingsApi.deleteListings(log)
    }

    const editLedgerHandler= async (des,id)=>{ // console.log(foundObj)//console.log(newArray)
        const foundObj= data.find(el=>el.id===id)
        foundObj.description=des+"*edited*"
        let newArray = data.map(el=>el.id===id ? foundObj : el)
        setData(newArray)
        const result = await listingsApi.editListings(
            des,id
        )
    }

    const addLedgerHandler= async (des,form)=>{
        // console.log("add handler button is working", des)
        const newledge=des
        const patientId=des.id
        newledge.id=data[0].id+100
        const newArray = [newledge,...data]
        setData(newArray)
        const result = await listingsApi.addLedger(des,patientId)
    }

    const renderItem = ({ item }) => (
        <PatientLedgers
            title={item.created_at ? item.created_at.split("T")[0] + " at " + item.created_at.split("T")[1].split(".")[0] : "newly added"}
            subTitle={item.description}
            id={item.id}
            edited={item.edited}
            imageUris={item.array_of_images}
            logo='arrow-left-bold'
            color={colors.danger}
            editLedgerHandler={editLedgerHandler}
            renderRightActions={()=>
                <ListItemDeleteAction onPress={()=>{item.created_at ? handleDelete(item) : null}}/>
                }
        />
      )

      const ShowAddLedger=()=>{// console.log(addLog)
        setAddLog(!addLog)
      }
// console.log(route.params.ledgers[0].array_of_images)
return (
        <Screen View style={styles.detailsContainer}>
            <View style={styles.userContainer}>
                <ListItem
                    title={listing.name + " P#:" +listing.hospital_patient_id}
                    subTitle={listing.main_practitioner+" "+listing.main_practitioner_title}
                    logo='book'
                    color={colors.highlight}
                    onPress={ShowAddLedger}
                />
                {addLog ? 
                    <Form
                        initialValues={{room: "", description: "",id:listing.id}}
                        onSubmit={addLedgerHandler}
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
        backgroundColor:colors.secondary,
        borderRadius:15,
    },
});

export default ListingDetailsScreen;

//<Image style={styles.image} source={{uri: listing.images[0].url}} />