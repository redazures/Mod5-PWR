import React from 'react'
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View>
            {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
    }
})
