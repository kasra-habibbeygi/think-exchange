/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../configs/theme';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoginStatusHandler } from '../state-manager/reducer/userInfo';
import { AdminLoginStatusHandler } from '../state-manager/reducer/adminInfo';
import { useDispatch, useSelector } from 'react-redux';

// Assets
import '../assets/styles/general.css';

//User Routes
import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import OrderHistory from '../pages/OrderHistory';
import Ordering from '../pages/Ordering';
import Login from '../pages/Login';
import Register from '../pages/Register';
import LayoutProvider from '../components/layouts/LayoutProvider';

// Admin Routes
import AdminLayoutProvider from '../components/layouts/admin/LayoutProvider';
import AdminLogin from '../pages/adminPanel/Login';
import AdminCurenciesList from '../pages/adminPanel/curenciesList';
import TicketList from '../pages/adminPanel/ticketList';

const RequireAuth = ({ children, userType = 'user' }) => {
    const UserLoginStatus = useSelector(state => state.UserInfo.isLogin);
    const AdminLoginStatus = useSelector(state => state.AdminInfo.isLogin);
    const location = useLocation();
    const dispatch = useDispatch();

    if (userType === 'user') {
        if (localStorage.getItem('userToken') === null) {
            dispatch(LoginStatusHandler(false));
        }
        return UserLoginStatus ? children : <Navigate to='/login' replace state={{ path: location.pathname }} />;
    }

    if (localStorage.getItem('adminToken') === null) {
        dispatch(AdminLoginStatusHandler(false));
    }
    return AdminLoginStatus ? children : <Navigate to='/admin-panel/login' replace state={{ path: location.pathname }} />;
};

const RequireNoAuth = ({ children, userType = 'user' }) => {
    const UserLoginStatus = useSelector(state => state.UserInfo.isLogin);
    const AdminLoginStatus = useSelector(state => state.AdminInfo.isLogin);
    const location = useLocation();

    if (userType === 'user') {
        return !UserLoginStatus ? children : <Navigate to='/dashboard' replace state={{ path: location.pathname }} />;
    }
    return !AdminLoginStatus ? children : <Navigate to='/admin-panel/curencies-list' replace state={{ path: location.pathname }} />;
};

const IndexPage = () => {
    const navigate = useNavigate();

    const UserLoginStatus = useSelector(state => state.UserInfo.isLogin);
    const AdminLoginStatus = useSelector(state => state.AdminInfo.isLogin);
    useEffect(() => {
        if (UserLoginStatus) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }

        if (AdminLoginStatus) {
            navigate('/admin-panel/dashboard');
        }
    }, []);
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

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
                    path='/admin-panel/login'
                    element={
                        <RequireNoAuth userType='admin'>
                            <AdminLogin />
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
                    <Route element={<IndexPage />} index />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='account' element={<Account />} />
                    <Route path='order-history' element={<OrderHistory />} />
                    <Route path='ordering' element={<Ordering />} />
                </Route>
                <Route
                    path='/admin-panel/'
                    element={
                        <RequireAuth userType='admin'>
                            <AdminLayoutProvider />
                        </RequireAuth>
                    }
                >
                    <Route element={<IndexPage />} index />
                    <Route path='curencies-list' element={<AdminCurenciesList />} />
                    <Route path='tickets-list' element={<TicketList />} />
                    <Route path='orders-list' element={<OrderHistory />} />
                    <Route path='users-list' element={<Ordering />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
