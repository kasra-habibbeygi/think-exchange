/* eslint-disable react/prop-types */
import React from 'react';

//styles
import { LayoutProdiverStyle } from './LayoutProdiver.style';

//components
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const LayoutProvider = () => {
    return (
        <LayoutProdiverStyle>
            <SideBar />
            <div className='content'>
                <Outlet />
            </div>
        </LayoutProdiverStyle>
    );
};

export default LayoutProvider;
