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


export default {
    addListings,
    getListings,
    deleteListings,
    editListings,
}