import React from 'react'
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight
    }
})
