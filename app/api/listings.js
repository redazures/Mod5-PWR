import client from './client';
import Resizer from 'react-image-file-resizer';

const endpoint = 'patients';
const endpointLedger = 'ledgers/'
const endpoint2 = '/listings'

const getListings = () => client.get(endpoint)


const addListings = (listing, onUploadProgress) =>{
    const patient = new FormData()
    patient.append('name',listing.name)
    patient.append('room',listing.room)
    patient.append('description',listing.description)
    return client.post(endpoint, patient, {
        onUploadProgress:(progress)=>
            onUploadProgress(progress.loaded/progress.total)
    })
}

const deleteLedger=(item)=>{
    const deleteLink = endpointLedger+item.id
    return client.delete(deleteLink)
}

const editLedger=(des,id)=>{
    console.log(des,id)
    return client.patch(endpointLedger+id,{description: des})
}

const addLedger = (des, id) =>{ 
    // console.log(des,id)
    const ledger = new FormData()
    ledger.append('patient_id',id)
    ledger.append('current_room',des.room)
    ledger.append('description',des.description)
    des.images.forEach((image,index)=>
    ledger.append('images[]',{
        name: 'image'+index,
        type: 'image/jpeg',
        uri: image,
    }))
    // console.log(ledger)
    return client.post(endpointLedger, ledger)
}

const addPatient = async (obj)=>{
    // console.log(obj)
    const data = new FormData()
    data.append('name',obj.name)
    data.append('room',obj.room)
    data.append('hospital_patient_id',obj.patient_id)
    data.append('description',obj.description)
    data.append('current',true)
    obj.images.forEach((image,index)=>
        data.append('images[]',{
        name: 'image'+index,
        type: 'image/jpeg',
        uri: image,
    }))
    // console.log(data)
    return client.post(endpoint, data)
}

export default {
    addListings,
    getListings,
    deleteLedger,
    editLedger,
    addLedger,
    addPatient,
}