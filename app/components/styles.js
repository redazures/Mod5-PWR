import { StyleSheet } from 'react-native'
import colors from '../config/colors'

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonContainer:{
        padding:20,
        width:'100%',
    },
    loginButton:{
        width: '100%',
        backgroundColor:colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        margin:10,
    },
    logo:{
        width: 100,
        height:100,
    },
    logoContainer:{
        position:"absolute",
        top:100,
        alignItems:'center',
    },
    registerButton:{
        width: '100%',
        height:70,
        backgroundColor:'#4ecdc4',
    },
    welcomeText:{
        color:colors.white,
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:'bold',
    },
})

export default styles;