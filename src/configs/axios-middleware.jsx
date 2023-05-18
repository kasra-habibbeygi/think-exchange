import axios from 'axios';
import { toast } from 'react-hot-toast';

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
        config.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    }

    return config;
});

instance.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem('userToken');
            window.location.href = '/login';
        } else {
            toast.error(error.response.data.message, { style: { zIndex: 2000 } });
        }
        return Promise.reject(error);
    }
);

export default instance;
