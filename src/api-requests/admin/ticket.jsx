import Axios from '../../configs/admin-axios-middleware';

export const GetAllTickets = async () => {
    return Axios.get('tickets/all').then(res => res.data);
};

export const TicketDetails = async id => {
    return Axios.get(`tickets/show/${id}`).then(res => res.data);
};
