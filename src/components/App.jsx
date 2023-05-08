import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../configs/theme';
import { Routes, Route, Navigate } from 'react-router-dom';
import LayoutProvider from './layouts/LayoutProvider';

// Assets
import '../assets/styles/general.css';

//components
import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import OrderHistory from '../pages/OrderHistory';
import Ordering from '../pages/Ordering';

function App() {
    const themeConfig = createTheme(getDesignTokens('light'));

    return (
        <ThemeProvider theme={themeConfig}>
            <LayoutProvider>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/order-history' element={<OrderHistory />} />
                    <Route path='/ordering' element={<Ordering />} />
                    <Route path='/*' element={<Navigate to='/dashboard' />} />
                </Routes>
            </LayoutProvider>
        </ThemeProvider>
    );
}

export default App;
