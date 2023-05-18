/* eslint-disable react/prop-types */
import React from 'react';

//style
import { CustomInputStyle } from './CustomInput.style';

//mui
import TextField from '@mui/material/TextField';

const TextArea = ({ label, valuehandler, name }) => {
    return (
        <CustomInputStyle>
            <TextField label={label} name={name} multiline onChange={e => valuehandler(e)} />
        </CustomInputStyle>
    );
};

export default TextArea;
