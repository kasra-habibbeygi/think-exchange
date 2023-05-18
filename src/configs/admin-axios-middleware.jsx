/* eslint-disable no-undef */
import axios from 'axios';
import { toast } from 'react-hot-toast';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

instance.interceptors.request.use(async config => {
    if (config.data) {
        for (const key of Object.keys(config.data)) {
            if (config.data[key] === '') {
                delete config.data[key];
            }
        }
    }

    if (localStorage.getItem('adminToken') !== null) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('adminToken')}`;
    }

    return config;
});

instance.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem('adminToken');
            window.location.href = '/admin-panel/login';
        } else {
            toast.error(error.response.data.message, { style: { zIndex: 2000 } });
        }
        return Promise.reject(error);
    }
);

export default instance;
