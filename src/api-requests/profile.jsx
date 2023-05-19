import Axios from '../configs/axios-middleware';

export const PutUserProfile = async data => {
    return Axios.put('profile', data).then(res => res.data);
};
