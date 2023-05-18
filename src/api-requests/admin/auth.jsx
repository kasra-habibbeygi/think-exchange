import Axios from '../../configs/admin-axios-middleware';

export const AdminLogin = async data => {
    return Axios.post('admin_login', data).then(res => res.data);
};
