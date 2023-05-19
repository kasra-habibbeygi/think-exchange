import Axios from '../../configs/admin-axios-middleware';

export const GetAllOrders = async data => {
    return Axios.get('orders/all', data).then(res => res.data);
};

export const UpdateOrderStatus = async (id, data) => {
    return Axios.put(`orders/change_status/${id}`, data).then(res => res.data);
};
