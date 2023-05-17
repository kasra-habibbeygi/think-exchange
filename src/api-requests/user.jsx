import Axios from '../configs/axios-middleware';

export const GetUserDashboard = async () => {
    return Axios.get('dashboard').then(res => res.data);
};
