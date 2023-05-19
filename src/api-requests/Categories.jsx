import Axios from '../configs/axios-middleware';

export const GetAllCategories = async () => {
    return Axios.get('order_categories').then(res => res.data);
};

export const GetServicesList = async id => {
    return Axios.get(`category_services/${id}`).then(res => res.data);
};
