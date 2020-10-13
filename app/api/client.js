import {create} from 'apisauce'

const apitClient = create({
    baseURL: "http://127.0.0.1:3000/",
})

export default apitClient

//baseURL: "http://127.0.0.1:3000/" // this is for rails
//baseURL: "http://192.168.1.20:9000/api/" // this is for test backend