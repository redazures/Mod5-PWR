import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BodyText from './BodyText'
import Icon from './Icon'

export default function CategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <BodyText styles={styles.label}>{item.label}</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:22,
        paddingVertical:15,
        alignItems:'center',
        width:'33%',
    },
    label:{
        paddingTop:5,
        textAlign:'center'
    },
})
