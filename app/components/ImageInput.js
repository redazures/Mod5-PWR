import React, { useEffect } from 'react'
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Alert } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import  * as Permission from 'expo-permissions'


import colors from '../config/colors'

export default function ImageInput({ imageUri, onChangeImage }) {
    
    useEffect(()=>{
        requestPermission()
      }, [])
      
    const requestPermission = async () =>  {
        const {granted }= await Permission.askAsync(Permission.CAMERA_ROLL)
        if(!granted)alert('Permission Not-granted')
      }

    const handlePress = ()=>{
        if(!imageUri) selectImage()
        else Alert.alert("Delete", "Are you sure you want to delete this",[
            {text:'Yes',onPress:()=>onChangeImage(null)},
            {text: 'no'}
        ])
    }

    // console.log(imageUri)
    const selectImage= async ()=>{
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });
          if(!result.cancelled){
            onChangeImage(result.uri)
          }
            
        } catch (error) {
          console.log('error reading an image', error)
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons name='camera' size={40} colors={colors.medium}/>)}
                {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.light,
        borderRadius:15,
        height:100,
        justifyContent:'center',
        overflow:'hidden',
        width:100,
    },
    image:{
        width:'100%', 
        height:'100%',
    },
})
