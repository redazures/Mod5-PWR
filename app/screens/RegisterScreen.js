import React, { useState,useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";
import authApi from '../api/auth'
import AuthContext from '../auth/context'

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    name:Yup.string().required().label("Name"),  
    password:Yup.string().required().min(4).label("Password"),
    // employee_id:Yup.number().required().min(4).label("Employee_id"), 
    title:Yup.string().required().min(4).label("Title"), 
})

export default function RegisterScreen() {
    // console.log("this is the register screen")
    const authContext = useContext(AuthContext)
    const[signUpFailed, setSignUpFailed] =useState(false)
    
    const handleSignupSubmit= async ({name, title, email, password, employee_id})=>{// console.log("this is the form tapping",name, title, email, password, employee_id)
        const result = await authApi.signup(name, title, email, password, employee_id)
        if (!result.ok) return setSignUpFailed(true)
        setSignUpFailed(false)
        // const user = jwtDecode(result.data.jwt)
        authContext.setUser(result.data.jwt)
    }

    

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{name:"",email:"",password:"",title:"",employee_id: Math.floor(999 + (9999 - 999) * Math.random())}}
                onSubmit={handleSignupSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid SignUp Information" visible={signUpFailed}/>
                <AppFormField
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    placeholder="Name"
                />
                <AppFormField
                    autoCapitalize="none" // this prevents IOS and android to auto capitalize first letter
                    autoCorrect={false}
                    icon="github-box"
                    name='title'
                    placeholder="Title"
                />
                <AppFormField
                    autoCapitalize="none" // this prevents IOS and android to auto capitalize first letter
                    autoCorrect={false}
                    icon="email"
                    keyboardType='email-address'
                    name='email'
                    placeholder="Email"
                    textContentType="emailAddress" //allows IOS to autofill from keychain
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password' //allows IOS to autofill from keychain
                />
                <SubmitButton title={'Sign Up'}/>
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20,
    }
})
