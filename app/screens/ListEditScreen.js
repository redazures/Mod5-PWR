import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import listingsApi from '../api/listings'
import useLocation from "../components/hooks/useLocation";
import listings from "../api/listings";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images:Yup.array().min(1,"Please select at least at one image")      //.label("Images")//Images field is required
});

const categories = [
    {label:"Medical", value:1, backgroundColor:'red', icon:'apps'},
    {label:"Surgery", value:2, backgroundColor:'green', icon:'email'},
    {label:"ICU", value:3, backgroundColor:'blue', icon:'lock'},
];

export default function ListingEditScreen() {
    const location = useLocation()

    const handleSubmit = async (listings) =>{
        // console.log(listing)
        const result = await listingsApi.addListings({...listings, location})
        // console.log(result)
        if (!result.ok) return alert ('Could not save data at this time')
        alert('success')
    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ title: "", price: "", description: "", category: "", images:[]}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
            <FormImagePicker name='images'/>
            <FormField maxLength={255} name="title" placeholder="Title" />
            <FormField
                keyboardType="numeric"
                maxLength={8}
                name="price"
                placeholder="Price"
                //width={120}
            />
            <Picker 
                items={categories} 
                name="category"
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
                placeholder="Category" 
            /> 
            {/* //width='50%' belongs in the picker above to change the spacing*/}
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