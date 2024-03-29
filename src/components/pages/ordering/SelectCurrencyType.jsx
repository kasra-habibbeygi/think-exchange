/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
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

const SelectCurrencyType = ({ setInputValues, inputValues, buyCurrency}) => {
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
                setPrice(() => {
                    return res.data.filter(item => item.iso_name === searchParams.get('curency'))[0]?.price;
                });
                setInputValues(prev => ({
                    ...prev,
                    currency_id: res.data.filter(item => item.iso_name === searchParams.get('curency'))[0]?.id
                }));
            }
        });
    }, [searchParams]);

    useEffect(() => {
        if(Object.keys(buyCurrency).length) {
            if (!('created_at' in buyCurrency)) {
                setSelectedCurency(() => {
                    return currencies.filter(item => item.name === buyCurrency?.name)[0];
                });
                setCurencyImg(() => {
                    return currencies.filter(item => item.name === buyCurrency?.name)[0]?.logo;
                });
                setPrice(() => {
                    return currencies.filter(item => item.name === buyCurrency?.name)[0]?.price;
                });
                setInputValues(prev => ({
                    ...prev,
                    currency_id: currencies.filter(item => item.name === buyCurrency?.name)[0]?.id
                }));
            }
        }
    }, [buyCurrency]);

    const inputValueHandler = e => {
        if (!isNaN(e.target.value)) {
            console.log(1);
            setInputValues(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));

            if (inputValues.currency_id !== '') {
                setInputValues(prev => ({
                    ...prev,
                    exchange_amount: Tools.addCommaInNumbers(Math.abs(e.target.value * price))
                }));
            }
        }
    };

    const selectValueHandler = value => {
        setPrice(value.price);
        setCurencyImg(value.logo);

        setInputValues({
            ...inputValues,
            currency_id: value.id
        });

        setSelectedCurency({
            iso_name: value.iso_name
        });

        if (inputValues.currency_amount !== '') {
            setInputValues(prev => ({
                ...prev,
                exchange_amount: Tools.addCommaInNumbers(Math.abs(inputValues.currency_amount * value.price))
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
                    disabled={selectedCurency.iso_name === ''}
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
                        disabled={!('created_at' in buyCurrency) && Object.keys(buyCurrency).length ? true : false}
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
            <p className='price'>
                = {inputValues.exchange_amount || 0}{' '}
                {inputValues.exchange_amount.replaceAll(',', '').length <= 6
                    ? 'هزار'
                    : inputValues.exchange_amount.replaceAll(',', '').length <= 9
                        ? 'میلیون'
                        : 'میلیارد'}{' '}
                تومان
            </p>
        </SelectCurrencyTypeStyle>
    );
};

export default SelectCurrencyType;
