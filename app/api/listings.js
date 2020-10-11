import client from './client';

const endpoint = '/listings';

const getListings = () => client.get('/listings')

export default {
    getlistings,
}