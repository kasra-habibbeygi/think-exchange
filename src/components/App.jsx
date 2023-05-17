/* eslint-disable react/prop-types */
import React, { lazy, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../configs/theme';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoginStatusHandler } from '../state-manager/reducer/userInfo';
import { useDispatch, useSelector } from 'react-redux';

// Assets
import '../assets/styles/general.css';

//components
import Account from '../pages/Account';
// import Dashboard from '../pages/Dashboard';
import OrderHistory from '../pages/OrderHistory';
import Ordering from '../pages/Ordering';
import Login from '../pages/Login';
import Register from '../pages/Register';
import LayoutProvider from '../components/layouts/LayoutProvider';
const Dashboard = lazy(() => import('../pages/Dashboard'));

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
                <Route
                    path='/'
                    element={
                        <RequireAuth>
                            <LayoutProvider />
                        </RequireAuth>
                    }
                >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='account' element={<Account />} />
                    <Route path='order-history' element={<OrderHistory />} />
                    <Route path='ordering' element={<Ordering />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
