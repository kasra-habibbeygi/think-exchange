import Axios from '../configs/axios-middleware';

// Manager
export const GetAllCurrencies = async () => {
    return Axios.get('currencies').then(res => res.data);
};
