/* eslint-disable react/prop-types */
import React from 'react';

//button mui
import Button from '@mui/material/Button';

// styles
import { CustomButtonStyle } from './CustomButton.style';

const CustomButton = ({ text, variant, background, radius, fontcolor, clickHandeler, children }) => {
    return (
        <CustomButtonStyle background={background} radius={radius} fontcolor={fontcolor}>
            <Button variant={variant} onClick={clickHandeler}>
                {text}
                {children}
            </Button>
        </CustomButtonStyle>
    );
};

export default CustomButton;