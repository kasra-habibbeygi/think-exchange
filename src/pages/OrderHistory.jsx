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

    useEffect(() => {
        GetUserDashboard()
            .then(res => {
                setGetData(res.data);
            })
            .catch(() => {
                console.log(1);
            });
    }, []);

    return (
        <OrderHistoryStyle>
            {Object.keys(getData).length ? <ListOrdering orderList={getData.user.orders} /> : <h1>Loading...</h1>}
            <Refund />
        </OrderHistoryStyle>
    );
};

export default OrderHistory;
