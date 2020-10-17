import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ImageInput from './ImageInput'

export default function DisplayImages({ imageUris=[], onRemoveImage, onAddImage }) {
    const scrollView = useRef()
    
    
    return (
        <View>
            <ScrollView 
                ref={scrollView} 
                horizontal 
                onContentSizeChange={()=>scrollView.current.scrollToEnd()}
                >
                <View style={styles.container} >
                    {imageUris.map(uri=>(
                        <View 
                            key={uri}
                            style={styles.image}
                        >     
                        <ImageInput 
                            imageUri={"http://127.0.0.1:3000"+uri} 
                            onChangeImage={()=>onRemoveImage(uri)}
                        />
                </View>
                        )
                    )}
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
