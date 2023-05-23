/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { LoginStatusHandler } from '../state-manager/reducer/userInfo';

//style
import { RegisterStyle } from '../assets/styles/register.style';
import image from '../assets/images/login-register/bg.png';
import logo from '../assets/images/login-register/Logo.png';

//components
import CustomButton from '../components/form-group/CustomButton';
import CustomInput from '../components/form-group/CustomInput';

//mui
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//api
import { UserRegister } from '../api-requests/auth';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [rulesStatus, setRulesStatus] = useState(false);
    const [registerForm, setRegisterForm] = useState({
        email: '',
        last_name: '',
        first_name: '',
        password: '',
        password_confirmation: ''
    });

    const validatFrom = () => {
        if (validator.isEmpty(registerForm.first_name)) {
            toast.error('نام  خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.last_name)) {
            toast.error('نام خانوادگی خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.email)) {
            toast.error('ایمیل خود را وارد کنید');
            return false;
        } else if (!validator.isEmail(registerForm.email)) {
            toast.error('ایمیل را به درستی وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.password)) {
            toast.error('پسورد  خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(registerForm.password_confirmation)) {
            toast.error('تکرار پسورد  خود را وارد کنید');
            return false;
        } else if (registerForm.password.length < 8) {
            toast.error('پسورد باید حداقل 8 کارکتر باشد');
            return false;
        } else if (!validator.equals(registerForm.password_confirmation, registerForm.password)) {
            toast.error('پسورد با تکرار پسورد برابر نیست');
            return false;
        } else if (!rulesStatus) {
            toast.error('شما هنوز قوانین و مقررات را قبول نکرده اید');
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
        if (validatFrom()) {
            setLoader(true);
            UserRegister(registerForm)
                .then(res => {
                    localStorage.setItem('userToken', res.data.token);
                    dispatch(LoginStatusHandler(true));
                    navigate('/dashboard');
                    toast.success('ثبت نام شما با موفقیت انجام شد');
                })
                .finally(() => {
                    setLoader(false);
                });
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
                    <FormControlLabel
                        required
                        control={<Checkbox onChange={e => setRulesStatus(e.target.checked)} />}
                        label='با تمامی قوانین و مقررات صرافی موافقم'
                    />

                    <div className='sub_btn'>
                        <CustomButton
                            className='btn'
                            background='garadient'
                            text='ثبت نام'
                            variant='text'
                            radius='normal'
                            fontcolor='white'
                            clickHandeler={submitHandler}
                            loader={loader}
                        />
                    </div>
                </div>
            </div>
        </RegisterStyle>
    );
};

export default Register;
