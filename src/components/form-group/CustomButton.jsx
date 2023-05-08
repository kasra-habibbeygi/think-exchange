/* eslint-disable react/prop-types */
import React from 'react';

//button mui
import Button from '@mui/material/Button';

// styles
import { CustomButtonStyle } from './CustomButton.style';

const CustomButton = ({ text, variant, background, radius, fontcolor, clickHandeler }) => {
    return (
        <CustomButtonStyle background={background} radius={radius} fontcolor={fontcolor}>
            <Button variant={variant} onClick={clickHandeler}>
                {text}
            </Button>
        </CustomButtonStyle>
    );
};

export default CustomButton;
