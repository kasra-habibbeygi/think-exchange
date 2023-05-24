/* eslint-disable react/prop-types */
import React from 'react';
import { BeatLoader } from 'react-spinners';

//button mui
import Button from '@mui/material/Button';

// Assets
import { CustomButtonStyle } from './CustomButton.style';

const CustomButton = ({
    text,
    variant,
    background,
    radius,
    fontcolor,
    clickHandeler,
    children,
    type,
    disabled = false,
    loader = false,
    extraClass
}) => {
    return (
        <CustomButtonStyle background={background} radius={radius} fontcolor={fontcolor} variant={variant}>
            <Button
                variant={variant}
                onClick={() => clickHandeler && clickHandeler()}
                type={type}
                disabled={loader || disabled}
                className={`${extraClass ? extraClass : ''} btnStyle`}
            >
                {loader ? (
                    <BeatLoader color='#fff' size={10} style={{ height: '24px', display: 'flex', alignItems: 'center' }} />
                ) : (
                    <div className='content_field'>
                        {text}
                        {children}
                    </div>
                )}
            </Button>
        </CustomButtonStyle>
    );
};

export default CustomButton;
