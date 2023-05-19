import Axios from '../configs/axios-middleware';

export const PostNewRefund = async (data, productId) => {
    return Axios.post(`refunds/${productId}`, data).then(res => res.data);
};

export const GetRefund = async id => {
    return Axios.get(`refunds/show/${id}`).then(res => res.data);
};
