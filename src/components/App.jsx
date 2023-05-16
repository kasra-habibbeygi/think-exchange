import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../configs/theme';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Assets
import '../assets/styles/general.css';

//components

import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import OrderHistory from '../pages/OrderHistory';
import Ordering from '../pages/Ordering';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
    const themeConfig = createTheme(getDesignTokens('light'));

    return (
        <ThemeProvider theme={themeConfig}>
            <Toaster
                position='bottom-left'
                containerStyle={{
                    zIndex: 9999,
                    textAlign: 'right',
                    direction: 'rtl'
                }}
            />
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/account' element={<Account />} />
                <Route path='/order-history' element={<OrderHistory />} />
                <Route path='/ordering' element={<Ordering />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={<Navigate to='/dashboard' />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
