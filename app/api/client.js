import {create} from 'apisauce'

const apitClient = create({
    baseURL: "http://127.0.0.1:3000/",
})

export default apitClient