import React from 'react';
import { Link } from 'react-router-dom';

//style
import { RegisterStyle } from '../assets/styles/register.style';
import image from '../assets/images/login-register/bg.png';
import logo from '../assets/images/login-register/Logo.png';

//components
import CustomButton from '../components/form-group/CustomButton';
import CustomInput from '../components/form-group/CustomInput';

//mui
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Register = () => {
    return (
        <RegisterStyle image={image}>
            <div className='imageBlur'></div>
            <div className='container'>
                <div className='changeBtn'>
                    <Link to='/login'>
                        <CustomButton
                            className='btn'
                            background='white'
                            text='ورود به حساب'
                            variant='text'
                            radius='normal'
                            fontcolor='black'
                        />
                    </Link>
                    <Link to='/register'>
                        <CustomButton
                            className='active'
                            background='garadient'
                            text='ثبت نام'
                            variant='text'
                            radius='normal'
                            fontcolor='white'
                        />
                    </Link>
                </div>
                <div className='register'>
                    <img alt='logo' src={logo} />
                    <h2>خوش آمدید</h2>
                    <small>برای ثبت نام در تینک اکسچنج اطلاعات خود را وارد کنید</small>
                    <form>
                        <div className='formGroup'>
                            <CustomInput label='نام' type='text' />
                            <CustomInput label='نام خانوادگی' type='text' />
                        </div>
                        <CustomInput label='ایمیل' type='email' />
                        <div className='formGroup'>
                            <CustomInput label='کلمه عبور' type='password' />
                            <CustomInput label='تکرار کلمه عبور' type='password' />
                        </div>
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox />} label='با تمامی قوانین و مقررات صرافی موافقم' />
                        </FormGroup>

                        <CustomButton
                            className='btn'
                            background='garadient'
                            text='ثبت نام'
                            variant='text'
                            radius='normal'
                            fontcolor='white'
                        />
                    </form>
                </div>
            </div>
        </RegisterStyle>
    );
};

export default Register;
