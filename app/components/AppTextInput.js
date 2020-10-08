import React from 'react'
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'

export default function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon}/>}
            <TextInput style={styles.textInput} {...otherProps} size={20} color={colors.medium}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    textInput:{
        fontSize:18,
        fontFamily: Platform.OS==="android" ? "Roboto" : "Avenir",
    }
})
