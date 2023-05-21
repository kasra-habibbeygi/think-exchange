/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Component
import CustomInput from '../../form-group/CustomInput';

//Assets
import { SelectCurrencyTypeStyle } from './SelectCurrencyType.style';

// MUI
import { Autocomplete, Box, TextField } from '@mui/material';

// APIs
import { GetAllCurrencies } from '../../../api-requests/currencies';

// Utils
import Tools from '../../../utils/tools';

const SelectCurrencyType = ({ setInputValues, inputValues }) => {
    const [currencies, setCurrencies] = useState([]);
    const [curencyImg, setCurencyImg] = useState('');
    const [price, setPrice] = useState();
    const [searchParams] = useSearchParams();
    const [selectedCurency, setSelectedCurency] = useState({
        iso_name: ''
    });

    useEffect(() => {
        GetAllCurrencies().then(res => {
            setCurrencies(res.data);

            if (searchParams.get('curency')) {
                setSelectedCurency(() => {
                    return res.data.filter(item => item.iso_name === searchParams.get('curency'))[0];
                });
                setCurencyImg(() => {
                    return res.data.filter(item => item.iso_name === searchParams.get('curency'))[0]?.logo;
                });
                setInputValues(prev => ({
                    ...prev,
                    currency_id: res.data.filter(item => item.iso_name === searchParams.get('curency'))[0]?.id
                }));
            }
        });
    }, []);

    const inputValueHandler = e => {
        if (!isNaN(e.target.value)) {
            setInputValues(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));

            if (inputValues.currency_id !== '' && inputValues.currency_amount !== '') {
                setInputValues(prev => ({
                    ...prev,
                    exchange_amount: Tools.addCommaInNumbers(e.target.value * price)
                }));
            }
        }
    };

    const selectValueHandler = value => {
        setInputValues({
            ...inputValues,
            currency_id: value.id
        });
        setPrice(value.price);
        setCurencyImg(value.logo);

        if (inputValues.currency_amount !== '') {
            setInputValues(prev => ({
                ...prev,
                exchange_amount: Tools.addCommaInNumbers(inputValues.currency_amount * value.price)
            }));
        }
    };

    return (
        <SelectCurrencyTypeStyle>
            <h2>انتخاب نوع ارز و مبلغ </h2>
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
                        value={selectedCurency}
                        onChange={(e, value) => selectValueHandler(value)}
                        getOptionLabel={option => option.iso_name}
                        renderOption={(props, option) => (
                            <Box component='li' sx={{ '& > img': { mr: 1, flexShrink: 0 }, direction: 'ltr' }} {...props}>
                                <img
                                    width='20'
                                    src={`${process.env.REACT_APP_FILE_URL}${option.logo}`}
                                    alt=''
                                    style={{ marginRight: '10px' }}
                                />
                                <span style={{ fontSize: '0.8rem' }}>{option.iso_name}</span>
                            </Box>
                        )}
                        renderInput={params => <TextField {...params} />}
                    />
                </div>
            </div>
            <p className='price'>= {inputValues.exchange_amount || 0} میلیون تومان</p>
        </SelectCurrencyTypeStyle>
    );
};

export default SelectCurrencyType;
