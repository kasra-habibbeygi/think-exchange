/* eslint-disable react/prop-types */
import React from 'react';

//style
import { CustomSelectStyle } from './CustomSelect.style';

//mui
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomSelect = ({ SelectOptions, label }) => {
    return (
        <CustomSelectStyle>
            <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={SelectOptions}
                renderInput={params => <TextField {...params} label={label} />}
            />
        </CustomSelectStyle>
    );
};

export default CustomSelect;
