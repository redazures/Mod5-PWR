import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import BodyText from './BodyText'

export default function pickerItem({ label,onPress }) {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <BodyText style={styles.text}>{label}</BodyText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        padding:20,
    }
})
