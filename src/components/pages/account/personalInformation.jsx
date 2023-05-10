import React from 'react';

//style
import { PersonalInformationStyle } from './personalInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';
import CustomButton from '../../form-group/CustomButton';

const PersonalInformation = () => {
    return (
        <PersonalInformationStyle>
            <h2>تکمیل اطلاعات سفارش</h2>
            <div className='formBox'>
                <CustomInput label='نام' type='text' id='outlined-basic' />
                <CustomInput label='نام خانوادگی' type='text' id='outlined-basic' />
            </div>
            <CustomInput label='ایمیل' type='email' id='outlined-basic' />

            <div className='formBox'>
                <CustomInput label='شماره همراه فعال در فضای مجازی' type='text' id='outlined-basic' />
                <CustomInput label='شماره ثابت' type='text' id='outlined-basic' />
            </div>
            <CustomInput label='شماره ملی' type='text' id='outlined-basic' />
            <TextaAria label='توضیحات' type='text' rows={4} />
            <CustomButton className='btn' text='ویرایش اطلاعات' variant='text' background='garadient' radius='normal' fontcolor='white' />
        </PersonalInformationStyle>
    );
};

export default PersonalInformation;
