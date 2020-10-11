import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View,Platform } from 'react-native'
import AppText from '../components/AppText/AppText'
import styles from '../config/styles'
import AppButton from '../components/Button'

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/health.jpeg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/healthcare.png')}/>
                <AppText >Privilege with Responsibility</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" onPress={()=>
                    {
                        console.log("tapped")
                        navigation.navigate("Login")
                    }}
                />
                <AppButton title="Register" color="secondary" onPress={()=>
                    {
                        console.log("Reggie Miller tapped")
                        navigation.navigate("Register")
                    }}
                />
            </View>
        </ImageBackground>
    )
}
