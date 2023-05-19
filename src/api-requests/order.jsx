import Axios from '../configs/axios-middleware';

export const SubmitNewOrder = async data => {
    return Axios.post('orders', data).then(res => res.data);
};
