import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function NewListinButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='file-document-edit-outline' color={colors.white} size={40}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.primary,
        borderColor:colors.white,
        borderRadius:40,
        borderWidth:10,
        bottom:20,
        height:80,
        justifyContent:'center',
        width:80,
    }
})
