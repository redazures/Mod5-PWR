import client from './client';

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

const deleteListings=(item)=>{
    const deleteLink = endpointLedger+item.id
    return client.delete(deleteLink)
}

const editListings=(des,id)=>{
    return client.patch(endpointLedger+id,{description: des})
}

const addLedger = (des, id) =>{
    const ledger = new FormData()
    ledger.append('patient_id',id)
    ledger.append('current_room',des.room)
    ledger.append('description',des.description)
    // console.log(ledger)
    return client.post(endpointLedger, ledger)
}

export default {
    addListings,
    getListings,
    deleteListings,
    editListings,
    addLedger,
}