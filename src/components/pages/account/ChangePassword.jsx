import React from 'react';

//style
import { ChangePasswordStyle } from './ChangePassword.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import CustomButton from '../../form-group/CustomButton';

const ChangePassword = () => {
    return (
        <ChangePasswordStyle>
            <h2>تغییر کلمه عبور</h2>
            <CustomInput label='کلمه عبور جدید' type='text' />
            <CustomInput label='تکرار کلمه عبور جدید' type='text' />
            <CustomButton className='btn' text='ثبت ' variant='text' background='garadient' radius='normal' fontcolor='white' />
        </ChangePasswordStyle>
    );
};

export default ChangePassword;
