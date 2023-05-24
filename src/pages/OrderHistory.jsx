import React, { useEffect, useState } from 'react';

//components
import ListOrdering from '../components/pages/orderHistory/ListOrdering';
import Refund from '../components/pages/orderHistory/Refund';

//styles
import { OrderHistoryStyle } from '../assets/styles/orderHistory.style';

//api
import { GetUserDashboard } from '../api-requests/user';

const OrderHistory = () => {
    const [getData, setGetData] = useState([]);
    const [reLoad, setReLoad] = useState(false);

    useEffect(() => {
        GetUserDashboard().then(res => {
            setGetData(res.data);
        });
    }, [reLoad]);

    return (
        <OrderHistoryStyle>
            {<ListOrdering orderList={getData?.user?.orders} setReLoad={setReLoad} reLoad={reLoad} />}
            <Refund />
        </OrderHistoryStyle>
    );
};

export default OrderHistory;
