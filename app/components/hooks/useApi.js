import { useState } from "react"

export default useApi=(apiFunc)=>{
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const request = async () =>{
        setLoading(true)
        const response = await apiFunc;
        setLoading(false)
        // console.log(response)
        if (!response.ok) return setError(true) //console.log(response.problem) // console.log(response.data)
        setError(false)
        setData(response.data)
    }
    return { data, error, loading, request }
}