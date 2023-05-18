import Axios from '../../configs/admin-axios-middleware';

export const EditCurency = async (data, id) => {
    return Axios.put(`currencies/${id}`, data).then(res => res.data);
};
