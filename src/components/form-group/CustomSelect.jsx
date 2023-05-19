/* eslint-disable react/prop-types */
import React from 'react';

//style
import { CustomSelectStyle } from './CustomSelect.style';

//mui
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomSelect = ({ SelectOptions, label, setInputValues, inputValues, name, objectKey }) => {
    return (
        <CustomSelectStyle>
            <Autocomplete
                disablePortal
                className='select'
                options={SelectOptions}
                getOptionLabel={option => option[objectKey]}
                onChange={(event, newValue) => {
                    setInputValues({
                        ...inputValues,
                        [name]: newValue ? newValue?.id : ''
                    });
                }}
                renderInput={params => <TextField {...params} label={label} />}
            />
        </CustomSelectStyle>
    );
};

export default CustomSelect;
