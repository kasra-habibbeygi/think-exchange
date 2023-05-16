/* eslint-disable camelcase */

// librerys
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { validator } from 'validator';

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

//api
import { UserRegister } from '../api-requests/auth';

const Register = () => {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        last_name: '',
        first_name: '',
        password: '',
        password_confirmation: ''
    });

    const validatFrom = registerForm => {
        if (!validator.isEmail(registerForm.email)) {
            toast.error('ایمیل را به درستی وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.last_name)) {
            toast.error('نام خانوادگی خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.email)) {
            toast.error('ایمیل خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.first_name)) {
            toast.error('نام  خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.password)) {
            toast.error('پسورد  خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.password_confirmation)) {
            toast.error('تکرار پسورد  خود را وارد کنید');
            return false;
        } else if (!validator.equals(registerForm.password_confirmation, registerForm.password)) {
            toast.error('پسورد با تکرار پسورد برابر نیست');
            return false;
        }
        return true;
    };

    const inputValueHandler = e => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = () => {
        if (!validatFrom()) {
            // validatFrom();
            console.log(1);
        } else {
            // UserRegister(registerForm).then(res => {
            //     console.log(res.data);
            //     localStorage.setItem('adminToken', res.data.token);
            // });
        }
    };

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
                            <CustomInput
                                label='نام'
                                type='text'
                                valuehandler={inputValueHandler}
                                name='first_name'
                                value={registerForm.first_name}
                            />
                            <CustomInput
                                label='نام خانوادگی'
                                type='text'
                                valuehandler={inputValueHandler}
                                name='last_name'
                                value={registerForm.last_name}
                            />
                        </div>
                        <CustomInput label='ایمیل' type='email' valuehandler={inputValueHandler} name='email' value={registerForm.email} />
                        <div className='formGroup'>
                            <CustomInput
                                label='کلمه عبور'
                                type='password'
                                valuehandler={inputValueHandler}
                                name='password'
                                value={registerForm.password}
                            />
                            <CustomInput
                                label='تکرار کلمه عبور'
                                type='password'
                                valuehandler={inputValueHandler}
                                name='password_confirmation'
                                value={registerForm.password_confirmation}
                            />
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
                            clickHandeler={submitHandler}
                        />
                    </form>
                </div>
            </div>
        </RegisterStyle>
    );
};

export default Register;
