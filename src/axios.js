import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.postman.com/collections/11f34e183e1a312f9105'
})

export default instance