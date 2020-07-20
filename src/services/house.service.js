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
    const { name, checkIn, checkOut, guestCount, location } = filterBy;
    return httpService.get(_getUrl() + `?name=${name}&checkIn=${checkIn}&checkOut=${checkOut}&guestCount=${guestCount}&location=${location}`)
}


function getById(id) {
    return httpService.get(_getUrl(id))
}