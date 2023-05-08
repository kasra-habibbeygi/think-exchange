import React from 'react';

//components
import AddTickets from '../components/pages/dashboard/AddTickets';
import LatestCurrencyStatus from '../components/pages/dashboard/LatestCurrencyStatus';
import ListOrdering from '../components/pages/dashboard/ListOrdering';

//styles
import { DashboardStyle } from '../assets/styles/dashboard.style';

const Dashboard = () => {
    return (
        <div>
            <LatestCurrencyStatus />
            <DashboardStyle className='container'>
                <AddTickets />
                <ListOrdering />
            </DashboardStyle>
        </div>
    );
};

export default Dashboard;
