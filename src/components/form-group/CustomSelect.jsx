/* eslint-disable react/prop-types */
import React from 'react';

//style
import { CustomSelectStyle } from './CustomSelect.style';

//mui
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomSelect = ({ SelectOptions, label, setInputValues, inputValues, name }) => {
    return (
        <CustomSelectStyle>
            <Autocomplete
                disablePortal
                className='select'
                options={SelectOptions}
                value={inputValues[name]}
                onChange={(event, newValue) => {
                    setInputValues({
                        ...inputValues,
                        [name]: newValue ? newValue?.label : ''
                    });
                }}
                renderInput={params => <TextField {...params} label={label} />}
            />
        </CustomSelectStyle>
    );
};

export default CustomSelect;
