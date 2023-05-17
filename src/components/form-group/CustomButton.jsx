/* eslint-disable react/prop-types */
import React from 'react';
import { BeatLoader } from 'react-spinners';

//button mui
import Button from '@mui/material/Button';

// styles
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
    loader = false
}) => {
    return (
        <CustomButtonStyle background={background} radius={radius} fontcolor={fontcolor} variant={variant}>
            <Button
                variant={variant}
                onClick={() => clickHandeler && clickHandeler()}
                className='btnStyle'
                type={type}
                disabled={loader || disabled}
            >
                {loader ? (
                    <BeatLoader color='#fff' size={10} />
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
