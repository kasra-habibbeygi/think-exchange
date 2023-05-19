import Axios from '../../configs/admin-axios-middleware';

export const GetUserInfo = async id => {
    return Axios.get(`users/show/${id}`).then(res => res.data);
};

export const GetAllUsers = async () => {
    return Axios.get('users/all').then(res => res.data);
};
