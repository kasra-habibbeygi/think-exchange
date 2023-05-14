import React from 'react';

//components
import ListOrdering from '../components/pages/orderHistory/ListOrdering';
import Refund from '../components/pages/orderHistory/Refund';
import LayoutProvider from '../components/layouts/LayoutProvider';

//styles
import { OrderHistoryStyle } from '../assets/styles/orderHistory.style';

const OrderHistory = () => {
    return (
        <LayoutProvider>
            <OrderHistoryStyle>
                <ListOrdering />
                <Refund />
            </OrderHistoryStyle>
        </LayoutProvider>
    );
};

export default OrderHistory;
