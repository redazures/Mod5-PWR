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
        const id = IdContext._currentValue
        const result = await listingsApi.editListings(
                des,id
        )
        if (!result.ok) return alert ('Could not save data at this time')
        alert('success')
        resetForm()
        navigation.goBack()
    }

    const {description} = route.params
    const IdContext = React.createContext(id);
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