import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View,Platform } from 'react-native'
import AppText from '../components/AppText/AppText'
import styles from '../components/styles'
import AppButton from '../components/AppButton'



export default function WelcomeScreen() {
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
                <AppButton title="login" onPress={()=>console.log("tapped")}/>
                <AppButton title="Register" color="secondary" onPress={()=>console.log("Reggie Miller tapped")}/>
            </View>
        </ImageBackground>
    )
}
