import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//style
import { LoginStyle } from '../assets/styles/login.style';
import image from '../assets/images/login-register/bg.png';
import logo from '../assets/images/login-register/Logo.png';

//components
import CustomButton from '../components/form-group/CustomButton';
import CustomInput from '../components/form-group/CustomInput';

// APIs
import { UserLogin } from '../api-requests/auth';

const Login = () => {
    const [inputValues, setInputValue] = useState({
        email: '',
        password: ''
    });

    const inputValueHandler = e => {
        setInputValue({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = () => {
        UserLogin(inputValues).then(res => {
            console.log(res.data);
            localStorage.setItem('adminToken', res.data.token);
        });
    };

    return (
        <LoginStyle image={image}>
            <div className='imageBlur'></div>
            <div className='container'>
                <div className='changeBtn'>
                    <Link to='/login'>
                        <CustomButton
                            className='btn'
                            background='garadient'
                            text='ورود به حساب'
                            variant='text'
                            radius='normal'
                            fontcolor='white'
                        />
                    </Link>
                    <Link to='/register'>
                        <CustomButton className='btn' background='white' text='ثبت نام' variant='text' radius='normal' fontcolor='black' />
                    </Link>
                </div>
                <div className='login'>
                    <img alt='logo' src={logo} />
                    <h2>خوش آمدید</h2>
                    <small>برای ورود به حساب کاربری اطلاعات خود را وارد کنید</small>
                    <form>
                        <div className='formGroup'>
                            <CustomInput
                                label='ایمیل'
                                type='email'
                                name='email'
                                value={inputValues.email}
                                valuehandler={inputValueHandler}
                            />
                            <CustomInput
                                label='پسورد'
                                type='password'
                                name='password'
                                value={inputValues.password}
                                valuehandler={inputValueHandler}
                            />
                        </div>
                        <div className='textGroup'>
                            <p>کلمه عبور خود را فراموش کرده اید؟</p>
                            <Link to='/forget-password'>فراموشی کامه عبور</Link>
                        </div>
                        <CustomButton
                            className='btn'
                            background='garadient'
                            text='ورود به حساب'
                            variant='text'
                            radius='normal'
                            fontcolor='white'
                            clickHandeler={submitHandler}
                        />
                    </form>
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
