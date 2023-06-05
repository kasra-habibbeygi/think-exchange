import React, { useEffect, useState } from 'react';

//Components
import ListOrdering from '../components/pages/orderHistory/ListOrdering';
import Refund from '../components/pages/orderHistory/Refund';

//Assets
import { OrderHistoryStyle } from '../assets/styles/orderHistory.style';

//API
import { GetRefund } from '../api-requests/refund';

const OrderHistory = () => {
    const [reLoad, setReLoad] = useState(false);
    const [orderHistoryList, setOrderHistoryList] = useState([]);

    useEffect(() => {
        GetRefund().then(res => {
            setOrderHistoryList(res.data);
        });
    }, [reLoad]);

    return (
        <OrderHistoryStyle>
            <ListOrdering orderHistoryList={orderHistoryList} setReLoad={setReLoad} reLoad={reLoad} />
            <Refund orderHistoryList={orderHistoryList} />
        </OrderHistoryStyle>
    );
};

export default OrderHistory;
