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

    console.log(getData);
    return (
        <>
            <LatestCurrencyStatus />
            <DashboardStyle className='container'>
                {getData.length ? <AddTickets tickets={getData.user.tickets} /> : <h1>Loading...</h1>}
                {getData.length ? <ListOrdering orderHistory={getData.user.orders} /> : <h1>Loading...</h1>}
            </DashboardStyle>
        </>
    );
};

export default Dashboard;
