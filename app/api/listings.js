import client from './client';

const endpoint2 = 'patients';
const endpoint = '/listings'

const getListings = () => client.get(endpoint)

export default {
    getListings,
}