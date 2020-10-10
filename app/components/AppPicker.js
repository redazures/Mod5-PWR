import React,{ useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableWithoutFeedback, Modal,FlatList } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import BodyText from './BodyText'
import Screen from './Screen'
import PickerItem from './PickerItem'

export default function AppPicker({icon, items, onSelectItem, placeholder, selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (<MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>)}
                    {selectedItem ? 
                        <BodyText style={styles.text}>{selectedItem.label}</BodyText> 
                        : 
                        <BodyText style={styles.placeholder}>{placeholder}</BodyText>
                    }
                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={20} 
                        color={defaultStyles.colors.medium} 
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <Button title='Close' onPress={()=>setModalVisible(false)}/>
                        <FlatList
                            data={items}
                            keyExtractor={item=>item.value.toString()}
                            renderItem={({item})=><PickerItem
                                label={item.label}
                                onPress ={()=>{
                                    setModalVisible(false)
                                    onSelectItem(item)
                                    console.log(item)
                                }}
                            />}
                        />
                    </Screen>
            </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10
    },
    placeholder:{
        color:defaultStyles.colors.medium,
        flex:1
    },
    text:{
        flex:1,
    },
})
