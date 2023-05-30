import Axios from '../configs/axios-middleware';

export const PutUserProfile = async data => {
    return Axios.post('profile', data).then(res => res.data);
};

export const UploadFileAPI = async data => {
    return Axios.post('profile', data).then(res => res.data);
};
