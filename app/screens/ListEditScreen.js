import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import listingsApi from '../api/listings'
import routes from "../components/navigation/routes";


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    room: Yup.number().required().min(1).max(999).label("Room"),
    description: Yup.string().required().min(1).label("Description"),
});

export default function ListingEditScreen({navigation, route}) {
    
    const handleSubmit = async (listings, {resetForm}) =>{
        const result = await listingsApi.addListings(
            {...listings},
            (progress)=>console.log(progress)
        )
        if (!result.ok) return alert ('Could not save data at this time')
        alert('success')
        resetForm()
        navigation.navigate(routes.LISTINGS_SCREEN, listings)
    }


    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ title: "", price: "", description: "", category: "", images:[]}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
            <FormField maxLength={255} name="name" placeholder="Name" />
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
            <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});