import Axios from '../../configs/admin-axios-middleware';

export const GetAllRefunds = async data => {
    return Axios.get('refunds/all', data).then(res => res.data);
};
