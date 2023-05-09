/* eslint-disable react/prop-types */
import React from 'react';

//style
import { CustomInputStyle } from './CustomInput.style';

//mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextaAria = ({ label }) => {
    return (
        <CustomInputStyle>
            <Box component='form' noValidate autoComplete='on'>
                <TextField id='outlined-multiline-static' label={label} multiline rows={4} />
            </Box>
        </CustomInputStyle>
    );
};

export default TextaAria;
