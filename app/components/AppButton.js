import React from 'react'
import { Text, TouchableOpacity} from 'react-native'
import styles from '../config/styles'
import colors from '../config/colors'


const AppButton = ({title, onPress, color='primary'}) => {
    return (
        <TouchableOpacity style={[styles.loginButton,{backgroundColor:colors[color]}]} onPress={onPress}>
                <Text style={styles.welcomeText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton