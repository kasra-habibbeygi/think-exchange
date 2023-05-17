import Axios from '../configs/axios-middleware';

export const GetAllTickets = async () => {
    return Axios.get('tickets/all').then(res => res.data);
};

export const PostNewTickets = async data => {
    return Axios.post('tickets', data).then(res => res.data);
};
