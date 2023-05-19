import Axios from '../../configs/admin-axios-middleware';

export const GetUserInfo = async id => {
    return Axios.get(`users/show/${id}`).then(res => res.data);
};
