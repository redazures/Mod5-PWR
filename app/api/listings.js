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

    //console.log("this is my client", patient, client.post(endpoint)) 
    return client.post(endpoint, patient, {
        onUploadProgress:(progress)=>
            onUploadProgress(progress.loaded/progress.total)
    })
}

const deleteListings=(item)=>{
    
    const deleteLink = endpointLedger+item.id
    // console.log(deleteLink)
    // console.log(client.delete(deleteLink))
    return client.delete(deleteLink)
}

const editListings=(des,id)=>{
    // console.log("api",des,id)
    // console.log(endpointLedger+id)
    return client.patch(endpointLedger+id,{description: des})
}


export default {
    addListings,
    getListings,
    deleteListings,
    editListings,
}