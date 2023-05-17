import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://thinkexchange.net/service/public/api/'
});

instance.interceptors.request.use(async config => {
    if (localStorage.getItem('adminToken') !== null) {
        config.headers.Authorization = `Token ${localStorage.getItem('adminToken')}`;
    }

    return config;
});

export default instance;
