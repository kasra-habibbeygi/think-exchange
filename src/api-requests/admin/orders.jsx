import Axios from '../../configs/admin-axios-middleware';

export const GetAllOrders = async data => {
    return Axios.get('orders/all', data).then(res => res.data);
};
