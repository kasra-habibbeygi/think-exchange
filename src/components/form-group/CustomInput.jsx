/* eslint-disable react/prop-types */
import React from 'react';

//style
import { CustomInputStyle } from './CustomInput.style';

//mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomInput = ({ label, type, id, name, value, valuehandler }) => {
    return (
        <CustomInputStyle>
            <Box component='form' noValidate autoComplete='on'>
                <TextField label={label} variant='outlined' type={type} id={id} name={name} value={value} onChange={e => valuehandler(e)} />
            </Box>
        </CustomInputStyle>
    );
};

export default CustomInput;
