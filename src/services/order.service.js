import httpService from './http.service'

export const orderService = {
    query,
    create
}

function query(userId) {
    return httpService.get(_getUrl() + `?userId=${userId}`)
}

function create(order) {
    return httpService.post(_getUrl(), order)
}

function _getUrl(id = '') {
    return `order/${id}`;
}
