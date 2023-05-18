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
            {<LatestCurrencyStatus currency={getData?.currencies} />}
            <DashboardStyle className='container'>
                {<AddTickets tickets={getData?.user?.tickets} />}
                {<ListOrdering orderHistory={getData?.user?.orders} />}
            </DashboardStyle>
        </>
    );
};

export default Dashboard;
