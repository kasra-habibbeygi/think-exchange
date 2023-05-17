import Axios from '../configs/axios-middleware';

export const SetUserProfileData = async data => {
    return Axios.put('profile', data).then(res => res.data);
};
