import client from './client';


const endpoints = '/listings';

const getListings = (a, b, c) => client.get(endpoints);

export default {
    getListings,
}