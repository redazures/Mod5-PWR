import React, { useState,useContext } from 'react'
import { Image, ImageBackground, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode'

import authApi from '../api/auth'
import Screen from '../components/Screen'
import {AppFormField, SubmitButton, AppForm, ErrorMessage} from '../components/forms'
import colors from '../config/colors'
import AuthContext from '../auth/context'


const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("password")
})

export default function LoginScreen(props) {
    const authContext = useContext(AuthContext)
    
    const [loginFailed, setLoginFailed] = useState(false)

    const handleLoginSubmit=async({email,password})=>{
        // console.log("this is the submission at the login level", email, password)
        const result = await authApi.login(email, password)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        console.log(result.data)
        // const user = jwtDecode(result.data.jwt)
        authContext.setUser(result.data.jwt)
    }
    console.log("this is my ",authContext.user)
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/healthcare.png')}/>
            <AppForm
                initialValues={{email:'',password:''}}
                onSubmit={handleLoginSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error='Invalid email and/or Password.' visible={loginFailed}/>
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
                <SubmitButton title={'login'}/>
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:colors.white,
    },
    logo:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20,
    }
})
