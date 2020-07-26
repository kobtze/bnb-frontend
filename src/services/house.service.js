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
    const { location, checkIn, checkOut, adultNumber, childrenNumber, type, rating } = filterBy;
    return httpService.get(_getUrl() + `?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&adultNumber=${adultNumber}&childrenNumber=${childrenNumber}&type=${type}&rating=${rating}`)
}


function getById(id) {
    return httpService.get(_getUrl(id))
}