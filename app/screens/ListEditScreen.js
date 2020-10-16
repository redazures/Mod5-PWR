import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import { AppForm as Form, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import listingsApi from '../api/listings'
//import useLocation from "../components/hooks/useLocation";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    room: Yup.number().required().min(1).max(9999).label("Room"),
    patient_id: Yup.number().label("Patient_Id"),
    description: Yup.string().required().min(1).label("Description"),
    images:Yup.array().min(1,"Please select at least at one image")      //.label("Images")//Images field is required
});

export default function ListingEditScreen() {
    //const location = useLocation()

    const handleSubmit = async (obj) =>{
        // console.log(obj)
        const result = await listingsApi.addPatient({...obj})
        // if (!result.ok) return alert ('Could not save data at this time')
        // alert('success')
    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ name: "", room: "", description: "", category: "", images:[]}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name='images'/>
                <FormField maxLength={255} name="name" placeholder="Name" />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="room"
                    placeholder="Room"
                />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="patient_id"
                    placeholder="Patient_Id"
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