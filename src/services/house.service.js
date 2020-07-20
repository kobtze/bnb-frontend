const axios = require('axios');
import httpService from './http.service';
export const houseService = {
    query,
    getById,
}


function _getUrl(id = '') {
    return `house/${id}`;
}

function query(filterBy) {
    return httpService.get(_getUrl())
}

function getById(id) {
    return httpService.get(_getUrl(id))
}