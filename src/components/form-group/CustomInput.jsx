/* eslint-disable react/prop-types */
import React from 'react';

//style
import { CustomInputStyle } from './CustomInput.style';

//mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomInput = ({ label, type }) => {
    return (
        <CustomInputStyle>
            <Box component='form' noValidate autoComplete='on'>
                <TextField id='outlined-basic' label={label} variant='outlined' type={type} />
            </Box>{' '}
        </CustomInputStyle>
    );
};

export default CustomInput;
