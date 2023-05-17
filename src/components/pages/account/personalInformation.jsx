/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

//style
import { PersonalInformationStyle } from './personalInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';
import CustomButton from '../../form-group/CustomButton';

const PersonalInformation = ({ state, seState }) => {
    const changeHandeler = e => {
        const { value, name } = e.target;
        let formattedValue = value;
        if (name === 'landline') {
            formattedValue = value.replace(/[^0-9]/g, '');
        } else if (name === 'phoneNumber') {
            formattedValue = value.replace(/[^0-9]/g, '');
        } else if (name === 'nationalCode') {
            formattedValue = value.replace(/[^0-9]/g, '');
        }

        seState({ ...state, [name]: formattedValue });
    };

    const getFormDataHandeler = () => {};
    return (
        <PersonalInformationStyle>
            <h2>تکمیل اطلاعات حساب</h2>
            <div className='formBox'>
                <CustomInput label='نام' name='name' value={state.name} type='text' id='outlined-basic' valuehandler={changeHandeler} />
                <CustomInput
                    label='نام خانوادگی'
                    name='family'
                    value={state.family}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
            </div>

            <CustomInput label='ایمیل' name='email' value={state.email} type='email' id='outlined-basic' valuehandler={changeHandeler} />

            <div className='formBox'>
                <CustomInput
                    label='شماره همراه فعال در فضای مجازی'
                    name='phoneNumber'
                    value={state.phoneNumber}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
                <CustomInput
                    label='شماره ثابت'
                    name='landline'
                    value={state.landline}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
            </div>
            <CustomInput
                label='شماره ملی'
                name='nationalCode'
                value={state.nationalCode}
                type='text'
                id='outlined-basic'
                valuehandler={changeHandeler}
                maxLength='10'
            />
            <TextaAria label='توضیحات' name='explain' value={state.explain} type='text' rows={4} valuehandler={changeHandeler} />
            <CustomButton
                clickHandeler={getFormDataHandeler}
                className='btn'
                text='ویرایش اطلاعات'
                variant='text'
                background='garadient'
                radius='normal'
                fontcolor='white'
            />
        </PersonalInformationStyle>
    );
};

export default PersonalInformation;
