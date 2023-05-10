import React from 'react';

//style
import { CompleteOrderInformationStyle } from './CompleteOrderInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';
import CustomButton from '../../form-group/CustomButton';

const CompleteOrderInformation = () => {
    return (
        <CompleteOrderInformationStyle>
            <h2>تکمیل اطلاعات سفارش</h2>
            <div className='formBox'>
                <CustomInput label='نام' type='text' />
                <CustomInput label='نام خانوادگی' type='text' />
            </div>
            <div className='formBox'>
                <CustomInput label='ایمیل' type='email' />
                <CustomInput label='لینک سایت' type='text' />
            </div>
            <div className='formBox'>
                <CustomInput label='نام کاربری شما در سایت' type='text' />
                <CustomInput label='کلمه عبور شما در سایت' type='password' />
            </div>
            <TextaAria label='توضیحات' type='text' rows={4} />
            <CustomButton className='btn' text='ثبت سفارش' variant='text' background='garadient' radius='normal' fontcolor='white' />
        </CompleteOrderInformationStyle>
    );
};

export default CompleteOrderInformation;
