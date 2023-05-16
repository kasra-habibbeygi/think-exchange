import React, { useState } from 'react';

//style
import { ChangePasswordStyle } from './ChangePassword.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import CustomButton from '../../form-group/CustomButton';

const ChangePassword = () => {
    const [passwordData, setPasswordData] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    return (
        <ChangePasswordStyle>
            <h2>تغییر کلمه عبور</h2>
            <CustomInput
                label='کلمه عبور جدید'
                type='password'
                id='outlined-basic'
                name='newPassword'
                value={passwordData.newPassword}
                valuehandler={e => setPasswordData({ ...passwordData, [e.target.name]: e.target.value })}
            />
            <CustomInput
                label='تکرار کلمه عبور جدید'
                type='password'
                id='outlined-basic'
                name='confirmPassword'
                value={passwordData.confirmPassword}
                valuehandler={e => setPasswordData({ ...passwordData, [e.target.name]: e.target.value })}
            />
            <CustomButton className='btn' text='ثبت ' variant='text' background='garadient' radius='normal' fontcolor='white' />
        </ChangePasswordStyle>
    );
};

export default ChangePassword;
