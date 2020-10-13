import client from './client';

const endpoint = 'patients';
const endpoint2 = '/listings'

const getListings = () => client.get(endpoint)

const addListings = (listing, onUploadProgress) =>{
    const data = new FormData()
    data.append('name',listing.name)
    data.append('room',listing.room)
    data.append('description',listing.description)

    console.log("this is my client", client.post(endpoint))
    
    return client.post(endpoint, data, {
        onUploadProgress:(progress)=>
            onUploadProgress(progress.loaded/progress.total)
    })
}

export default {
    addListings,
    getListings,
}