import Axios from '../configs/axios-middleware';

// Manager
export const UserLogin = async data => {
    return Axios.post('login', data).then(res => res.data);
};

export const UserRegister = async data => {
    return Axios.post('register', data).then(res => res.data);
};
