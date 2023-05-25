import React, { useEffect, useState } from 'react';

//components
import AddTickets from '../components/pages/dashboard/AddTickets';
import LatestCurrencyStatus from '../components/pages/dashboard/LatestCurrencyStatus';
import ListOrdering from '../components/pages/dashboard/ListOrdering';

//styles
import { DashboardStyle } from '../assets/styles/dashboard.style';

//api
import { GetUserDashboard } from '../api-requests/user';

const Dashboard = () => {
    const [reLoad, setReLoad] = useState(false);
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        GetUserDashboard().then(res => {
            setGetData(res.data);
        });
    }, [reLoad]);

    return (
        <>
            <LatestCurrencyStatus currency={getData?.currencies} />
            <DashboardStyle className='container'>
                <AddTickets tickets={getData?.user?.tickets} setReLoad={setReLoad} reLoad={reLoad} />
                <ListOrdering orderHistory={getData?.user?.orders} />
            </DashboardStyle>
        </>
    );
};

export default Dashboard;
