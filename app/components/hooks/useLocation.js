import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

export default useLocation = () => {
    const [location, setLocation] = useState()
    

    const getLocaton = async () =>{
        const {granted} = await Location.requestPermissionsAsync()
        try {
            if(!granted) return;
            const result = await Location.getLastKnownPositionAsync()
            const {coords:{latitude, longitude}} = result
            setLocation({latitude, longitude})
        } catch (error) {
            console.log(error)
        }
    }   

    useEffect(()=>{
        getLocaton()
    },)

    return location
}