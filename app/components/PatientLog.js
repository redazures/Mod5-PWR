import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import BodyText from './AppText/BodyText'
import colors from '../config/colors'

export default function listItems({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <BodyText style={styles.title}>{title}</BodyText>
                <BodyText style={styles.subTitle}>{subTitle}</BodyText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
    },
    subTitle:{
        color:colors.medium
    },
    title:{
        fontWeight:'700',
        color:colors.black
    }
})
