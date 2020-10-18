import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ImageInput from './ImageInput'

export default function DisplayImages({ imageUris=[], onRemoveImage, onAddImage }) {
    const scrollView = useRef()
    
    // console.log(imageUris[0])
    return (
        <View>
            <ScrollView 
                ref={scrollView} 
                horizontal 
                onContentSizeChange={()=>scrollView.current.scrollToEnd()}
            >
                <View style={styles.container} >
                    {imageUris && imageUris.map(uri=>(
                        <View 
                            key={uri}
                            style={styles.image}
                        >     
                        <ImageInput 
                            imageUri={uri} 
                            // onChangeImage={()=>onRemoveImage(uri)}
                        />
                </View>
                        )
                    )}
                        {/* <ImageInput onChangeImage={uri=>onAddImage(uri)}/> */}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    image:{
        marginRight:10,
    },
})
