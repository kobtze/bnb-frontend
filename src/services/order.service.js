const axios = require('axios');
import httpService from './http.service'

export const orderService = {
    query
}

function query() {
    return httpService.get(_getUrl())
}

function _getUrl(id = '') {
    return `order/${id}`;
}
