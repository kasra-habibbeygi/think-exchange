import React from 'react';

//components
import ListOrdering from '../components/pages/orderHistory/ListOrdering';
import Refund from '../components/pages/orderHistory/Refund';

//styles
import { OrderHistoryStyle } from '../assets/styles/orderHistory.style';

const OrderHistory = () => {
    return (
        <OrderHistoryStyle>
            <ListOrdering />
            <Refund />
        </OrderHistoryStyle>
    );
};

export default OrderHistory;
