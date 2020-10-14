import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import listingsApi from '../api/listings'


const validationSchema = Yup.object().shape({
    description: Yup.string().required().min(1).label("Description"),
});

export default function ListingEditScreen({navigation, route}) {
    


    const handleEdit = async (des  , {resetForm}) =>{
        // console.log("this is my ", des)
        // console.log("this is my context",IdContext._currentValue)
        const id = IdContext._currentValue
        const result = await listingsApi.editListings(
                des,id
        )
        console.log(result)
        if (!result.ok) return alert ('Could not save data at this time')
        alert('success')
        resetForm()
        // navigation.navigate(routes.LISTINGS_SCREEN, listings)
    }

    const {current_room, description, id} = route.params
    console.log(current_room, description, id)
    const IdContext = React.createContext(id);
    // console.log(IdContext)
    return (
        <Screen style={styles.container}>
            <IdContext.Provider value={id}>
                <Form
                    initialValues={{description:description}}
                    onSubmit={handleEdit}
                    validationSchema={validationSchema}
                >
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Update Ledger" />
                </Form>
            </IdContext.Provider>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});