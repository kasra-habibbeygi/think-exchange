import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

//mui
import Button from '@mui/material/Button';

//style
import { SideBarStyle } from './SideBar.style';
import user from '../../../assets/images/layout/user.svg';
import exit from '../../../assets/images/layout/exit.svg';
import logo from '../../../assets/images/layout/Logo.svg';
import card from '../../../assets/images/layout/card.svg';
import menu from '../../../assets/images/layout/more.svg';
import dollar from '../../../assets/images/layout/dollar.svg';
import coupon from '../../../assets/images/layout/coupon.svg';
import MoneyBack from '../../../assets/images/layout/money-back.svg';

// Component
import LogoutModal from './LogoutModal';

const SideBar = () => {
    const location = useLocation();
    const [logoutModalState, setLogoutModalState] = useState(false);
    const [menuState, setmenuState] = useState(false);

    useEffect(() => {
        setmenuState(false);
    }, [location.pathname]);

    const clickHandeler = () => {
        setmenuState(true);
    };

    const containerHandeler = () => {
        setmenuState(false);
    };

    return (
        <>
            <SideBarStyle menu={menuState}>
                <div className='container' onClick={containerHandeler}></div>
                <button type='button' className='hambergureMenu' onClick={clickHandeler}>
                    <img alt='menu' src={menu} className='icon' />
                </button>
                <div className='SideBar'>
                    <div className='main_field'>
                        <div>
                            <Link to='/dashboard' className='logo'>
                                <img alt='logo' src={logo} />
                            </Link>
                            <ol className='menu'>
                                <li>
                                    <NavLink to='/admin-panel/curencies-list'>
                                        <img alt='user' src={dollar} />
                                        <span>لیست ارز ها</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/admin-panel/tickets-list'>
                                        <img alt='user' src={coupon} />
                                        <span>لیست تیکت ها</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/admin-panel/orders-list'>
                                        <img alt='user' src={card} />
                                        <span>لیست سفارش‌ها</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/admin-panel/refund-list'>
                                        <img alt='user' src={MoneyBack} />
                                        <span>لیست ریفاند ها</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/admin-panel/users-list'>
                                        <img alt='user' src={user} />
                                        <span>لیست کاربران</span>
                                    </NavLink>
                                </li>
                            </ol>
                        </div>
                        <div className='btn'>
                            <Button variant='text' onClick={() => setLogoutModalState(true)}>
                                <img alt='user' src={exit} />
                                خروج از حساب
                            </Button>
                        </div>
                    </div>
                </div>
            </SideBarStyle>
            <LogoutModal state={logoutModalState} setState={setLogoutModalState} />
        </>
    );
};

export default SideBar;
