import Axios from '../configs/axios-middleware';

export const PostNewTickets = async data => {
    return Axios.post('tickets', data).then(res => res.data);
};
