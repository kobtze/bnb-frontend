const axios = require('axios');

export const houseService = {
    query,
    getById
}

function query(filterBy) {
    return axios.get('http://localhost:3001/house')
        .then(res => res.data)
}

function getById(id) {
    return axios.get(`http://localhost:3001/house/${id}`)
        .then(res => res.data)
}
