import {create} from 'apisauce'

const apitClient = create({
    baseURL: "http://192.168.1.20:9000/api/",
})

export default apitClient

//baseURL2: "http://127.0.0.1:3000/"