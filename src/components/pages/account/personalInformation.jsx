/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

//style
import { PersonalInformationStyle } from './personalInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';
import CustomButton from '../../form-group/CustomButton';

const PersonalInformation = () => {
    const [formData, setFromData] = useState({
        name: '',
        family: '',
        email: '',
        phoneNumber: '',
        landline: '',
        nationalCode: '',
        explain: '',
        nationalCartFile: ''
    });

    const changeHandeler = e => {
        const { value, name } = e.target;
        console.log(name);
        let formattedValue = value;
        if (name === 'landline') {
            formattedValue = value.replace(/[^0-9]/g, '');
        } else if (name === 'phoneNumber') {
            formattedValue = value.replace(/[^0-9]/g, '');
        } else if (name === 'nationalCode') {
            formattedValue = value.replace(/[^0-9]/g, '');
        }

        setFromData({ ...formData, [name]: formattedValue });
    };

    const getFormDataHandeler = () => {
        console.log(formData);
    };
    return (
        <PersonalInformationStyle>
            <h2>تکمیل اطلاعات حساب</h2>
            <div className='formBox'>
                <CustomInput label='نام' name='name' value={formData.name} type='text' id='outlined-basic' valuehandler={changeHandeler} />
                <CustomInput
                    label='نام خانوادگی'
                    name='family'
                    value={formData.family}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
            </div>

            <CustomInput label='ایمیل' name='email' value={formData.email} type='email' id='outlined-basic' valuehandler={changeHandeler} />

            <div className='formBox'>
                <CustomInput
                    label='شماره همراه فعال در فضای مجازی'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
                <CustomInput
                    label='شماره ثابت'
                    name='landline'
                    value={formData.landline}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
            </div>
            <CustomInput
                label='شماره ملی'
                name='nationalCode'
                value={formData.nationalCode}
                type='text'
                id='outlined-basic'
                valuehandler={changeHandeler}
                maxLength='10'
            />
            <TextaAria label='توضیحات' name='explain' value={formData.explain} type='text' rows={4} valuehandler={changeHandeler} />
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
