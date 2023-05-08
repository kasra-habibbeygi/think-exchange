/* eslint-disable react/prop-types */
import React from 'react';

//styles
import { LayoutProdiverStyle } from './LayoutProdiver.style';

//components
import SideBar from './SideBar';

const LayoutProvider = ({ children }) => {
    return (
        <LayoutProdiverStyle>
            <SideBar />
            <div className='content'>{children}</div>
        </LayoutProdiverStyle>
    );
};

export default LayoutProvider;
