import axios from 'axios';
// import { toast } from 'react-hot-toast';

const instance = axios.create({
    baseURL: 'https://thinkexchange.net/service/public/api/'
});

instance.interceptors.request.use(async config => {
    if (config.data) {
        for (const key of Object.keys(config.data)) {
            if (config.data[key] === '') {
                delete config.data[key];
            }
        }
    }

    if (localStorage.getItem('userToken') !== null) {
        config.headers.Authorization = `Token ${localStorage.getItem('userToken')}`;
    }

    return config;
});
export default instance;
