import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Icon({name, size=40, backgroundColor='#000',iconColor='#fff'}) {
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor, // if the name of key and value isthe same, thisis enough
            justifyContent:'center',
            alignItems:'center'
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    )
}

const styles = StyleSheet.create({})

//Ths function is for the account screen. This is for the first item at the top of the screen