import Axios from '../configs/axios-middleware';

// Manager
export const SetUserProfileData = async data => {
    return Axios.put('profile', data).then(res => res.data);
};
