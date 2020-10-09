import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {Formik} from 'formik'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'


export default function LoginScreen(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/healthcare.png')}/>
            <AppTextInput
                autoCapitalize="none" // this prevents IOS and android to auto capitalize first letter
                autoCorrect={false}
                icon="email"
                keyboardType='email-address'
                onChangeText={text=>setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress" //allows IOS to autofill from keychain
            />
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon='lock'
                onChangeText={text=>setPassword(text)}
                placeholder='password'
                secureTextEntry
                textContentType='password' //allows IOS to autofill from keychain
            />
            <AppButton
                title='Login'
                width='100%'
                onPress={()=>console.log(email, password)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20,
    }
})
