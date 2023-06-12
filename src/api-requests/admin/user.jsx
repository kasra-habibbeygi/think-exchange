import Axios from '../../configs/admin-axios-middleware';

export const GetUserInfo = async id => {
    return Axios.get(`users/show/${id}`).then(res => res.data);
};

export const GetAllUsers = async page => {
    return Axios.get(`users/all?page=${page}`).then(res => res.data);
};

export const DeleteUser = async id => {
    return Axios.delete(`users/delete/${id}`).then(res => res.data);
};
