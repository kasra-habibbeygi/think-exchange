/* eslint-disable no-undef */
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
    const [curencyImg, setCurencyImg] = useState('');

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
                <div className='select_field'>
                    {curencyImg !== '' && (
                        <img
                            src={`${process.env.REACT_APP_FILE_URL}${curencyImg}`}
                            alt=''
                            style={{ marginRight: '10px' }}
                            className='selected_image'
                        />
                    )}

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
                            setCurencyImg(value.logo);
                        }}
                        getOptionLabel={option => `${option.iso_name}`}
                        renderOption={(props, option) => (
                            <Box component='li' sx={{ '& > img': { mr: 1, flexShrink: 0 }, direction: 'ltr' }} {...props}>
                                <img
                                    loading='lazy'
                                    width='20'
                                    src={`${process.env.REACT_APP_FILE_URL}${option.logo}`}
                                    alt=''
                                    style={{ marginRight: '10px' }}
                                />
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
            </div>
            <p className='price'>= {inputValues.exchange_amount || 0} میلیون تومان</p>
        </SelectCurrencyTypeStyle>
    );
};

export default SelectCurrencyType;
