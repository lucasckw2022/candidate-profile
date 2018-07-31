import axios from 'axios';

export const APIHelper = (method, url, data = {}) => {
    return axios({
        method,
        url
    })
}