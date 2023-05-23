import Axios from '../../configs/admin-axios-middleware';

export const GetAllRefunds = async data => {
    return Axios.get('refunds/all', data).then(res => res.data);
};

export const UpdateRefundStatus = async (id, data) => {
    return Axios.put(`refunds/change_status/${id}`, data).then(res => res.data);
};
