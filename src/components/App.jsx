/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../configs/theme';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoginStatusHandler } from '../state-manager/reducer/userInfo';

// Assets
import '../assets/styles/general.css';

//components
import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import OrderHistory from '../pages/OrderHistory';
import Ordering from '../pages/Ordering';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { useDispatch, useSelector } from 'react-redux';

function RequireAuth({ children }) {
    const isLogin = useSelector(state => state.UserInfo.isLogin);
    const location = useLocation();
    const dispatch = useDispatch();
    if (localStorage.getItem('userToken') === null) {
        dispatch(LoginStatusHandler(false));
    }

    return isLogin ? children : <Navigate to='/login' replace state={{ path: location.pathname }} />;
}

function RequireNoAuth({ children }) {
    const isLogin = useSelector(state => state.UserInfo.isLogin);
    const location = useLocation();

    return !isLogin ? children : <Navigate to='/dashboard' replace state={{ path: location.pathname }} />;
}

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    const themeConfig = createTheme(getDesignTokens('light'));
    return (
        <ThemeProvider theme={themeConfig}>
            <ScrollToTop />
            <Toaster
                position='bottom-left'
                containerStyle={{
                    zIndex: 9999,
                    textAlign: 'right',
                    direction: 'rtl'
                }}
            />
            <Routes>
                <Route
                    path='/dashboard'
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                />
                <Route
                    path='/account'
                    element={
                        <RequireAuth>
                            <Account />
                        </RequireAuth>
                    }
                />
                <Route
                    path='/order-history'
                    element={
                        <RequireAuth>
                            <OrderHistory />
                        </RequireAuth>
                    }
                />
                <Route
                    path='/ordering'
                    element={
                        <RequireAuth>
                            <Ordering />
                        </RequireAuth>
                    }
                />
                <Route
                    path='/register'
                    element={
                        <RequireNoAuth>
                            <Register />
                        </RequireNoAuth>
                    }
                />
                <Route
                    path='/login'
                    element={
                        <RequireNoAuth>
                            <Login />
                        </RequireNoAuth>
                    }
                />
                <Route path='/*' element={<Navigate to='/dashboard' />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
