/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

// Component
import CustomInput from '../../form-group/CustomInput';

//style
import { SelectCurrencyTypeStyle } from './SelectCurrencyType.style';

// MUI
import { Autocomplete, Box, TextField } from '@mui/material';

// APIs
import { GetAllCurrencies } from '../../../api-requests/currencies';

// Utils
import Tools from '../../../utils/tools';

const SelectCurrencyType = ({ setInputValues, inputValues }) => {
    const [currencies, setCurrencies] = useState([]);
    const [price, setPrice] = useState();

    useEffect(() => {
        GetAllCurrencies().then(res => {
            setCurrencies(res.data);
        });
    }, []);

    const inputValueHandler = e => {
        if (!isNaN(e.target.value)) {
            setInputValues(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
                exchange_amount: Tools.addCommaInNumbers(e.target.value * price)
            }));
        }
    };

    return (
        <SelectCurrencyTypeStyle>
            <h2>انتخاب نوع سفارش</h2>
            <div className='input_field'>
                <CustomInput
                    name='currency_amount'
                    label='مبلغ سرویس شما'
                    value={inputValues.currency_amount}
                    valuehandler={e => inputValueHandler(e)}
                />
                <Autocomplete
                    className='select'
                    options={currencies}
                    autoHighlight
                    disablePortal
                    disableClearable
                    onChange={(e, value) => {
                        setInputValues({
                            ...inputValues,
                            currency_id: value.id
                        });
                        setPrice(value.price);
                    }}
                    getOptionLabel={option => `${option.iso_name}`}
                    renderOption={(props, option) => (
                        <Box component='li' sx={{ '& > img': { mr: 1, flexShrink: 0 } }} {...props}>
                            <img loading='lazy' width='20' src={`https://thinkexchange.net/service/storage/${option.logo}`} alt='' />
                            <span style={{ fontSize: '0.8rem' }}>{option.iso_name}</span>
                        </Box>
                    )}
                    renderInput={params => (
                        <TextField
                            {...params}
                            inputProps={{
                                ...params.inputProps
                            }}
                        />
                    )}
                />
            </div>
            <p className='price'>= {inputValues.exchange_amount} میلیون تومان</p>
        </SelectCurrencyTypeStyle>
    );
};

export default SelectCurrencyType;
