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
                <CustomInput label='نام' type='text' />
                <CustomInput label='نام خانوادگی' type='text' />
            </div>
            <CustomInput label='ایمیل' type='email' />

            <div className='formBox'>
                <CustomInput label='شماره همراه فعال در فضای مجازی' type='text' />
                <CustomInput label='شماره ثابت' type='text' />
            </div>
            <CustomInput label='شماره ملی' type='text' />
            <TextaAria label='توضیحات' type='text' rows={4} />
            <CustomButton className='btn' text='ویرایش اطلاعات' variant='text' background='garadient' radius='normal' fontcolor='white' />
        </PersonalInformationStyle>
    );
};

export default PersonalInformation;
