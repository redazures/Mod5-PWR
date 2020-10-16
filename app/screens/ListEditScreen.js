import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../components/hooks/useLocation";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    room: Yup.number().required().min(1).max(9999).label("Room"),
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
    //const location = useLocation()

    const handleSubmit = async (obj) =>{
        // console.log(obj)
        const result = await listingsApi.addPatient({...obj})
    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ title: "", price: "", description: "", category: "", images:[]}}
                onSubmit={(values) => console.log(values)}
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