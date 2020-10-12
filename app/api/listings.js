import client from './client';

const endpoint = 'patients';

const getListings = () => client.get(endpoint)

export default {
    getListings,
}