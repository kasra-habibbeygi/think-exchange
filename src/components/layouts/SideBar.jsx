import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

//mui
import Button from '@mui/material/Button';

//style
import { SideBarStyle } from './SideBar.style';
import user from '../../assets/images/layout/user.svg';
import Phone from '../../assets/images/layout/Phone.svg';
import calender from '../../assets/images/layout/calender.svg';
import card from '../../assets/images/layout/card.svg';
import dashboard from '../../assets/images/layout/dashboard.svg';
import exit from '../../assets/images/layout/exit.svg';
import logo from '../../assets/images/layout/Logo.svg';
import menu from '../../assets/images/layout/more.svg';

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
                            <a href='https://thinkexchange.net/' className='logo'>
                                <img alt='logo' src={logo} />
                            </a>
                            <ol className='menu'>
                                <li>
                                    <NavLink to='/dashboard'>
                                        <img alt='user' src={dashboard} />
                                        <span>داشبورد</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/ordering'>
                                        <img alt='user' src={card} />
                                        <span>سفارش گذاری</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/order-history'>
                                        <img alt='user' src={calender} />
                                        <span>تاریخچه سفارش‌ها</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/account'>
                                        <img alt='user' src={user} />
                                        <span>حساب کاربری</span>
                                    </NavLink>
                                </li>
                            </ol>
                            <div className='callBox'>
                                <div className='call'>
                                    <img alt='user' src={Phone} />
                                    <p>
                                        تماس با پشتیبانی <span className='phoneCall'>219-132-112</span>
                                    </p>
                                </div>
                                <p className='time'>شنبه - چهارشنبه ۱۸:۰۰ - ۱۰:۰۰</p>
                            </div>
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
