import Axios from '../configs/axios-middleware';

// Manager
export const UserLogin = async data => {
    return Axios.post('login', data).then(res => res.data);
};
