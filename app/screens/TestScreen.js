import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm as Form, AppFormField as FormField, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import listingsApi from '../api/listings'


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    room: Yup.number().required().min(1).max(10000).label("Room"),
    description: Yup.string().label("Description"),
    images:Yup.array().min(1,"Please select at least at one image")
});

export default function ListingEditScreen() {

    const handleSubmit = async (obj) =>{
        // console.log(obj)
        const result = await listingsApi.test({...obj})
        // if (!result.ok) return alert ('Could not save data at this time')
        // alert('success')
    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ title: "", room: "", description: "", images:[]}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name='images'/>
                <FormField maxLength={255} name="title" placeholder="Title" />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="room"
                    placeholder="room"
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