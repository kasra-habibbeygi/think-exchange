import Axios from '../configs/axios-middleware';

export const GetAllCurrencies = async () => {
    return Axios.get('currencies').then(res => res.data);
};
