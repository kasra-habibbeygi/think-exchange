import Axios from '../configs/axios-middleware';

export const PostNewRefund = async (data, productId) => {
    return Axios.post(`refunds/${productId}`, data).then(res => res.data);
};

export const GetRefund = async () => {
    return Axios.get('orders/history').then(res => res.data);
};
