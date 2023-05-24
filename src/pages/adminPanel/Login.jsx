import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AdminLoginStatusHandler } from '../../state-manager/reducer/adminInfo';
import { toast } from 'react-hot-toast';
import validator from 'validator';

//style
import { LoginStyle } from '../../assets/styles/login.style';
import image from '../../assets/images/login-register/bg.jpg';
import logo from '../../assets/images/login-register/Logo.png';

//components
import CustomButton from '../../components/form-group/CustomButton';
import CustomInput from '../../components/form-group/CustomInput';

// APIs
import { AdminLogin } from '../../api-requests/admin/auth';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
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

    const validate = () => {
        if (validator.isEmpty(inputValues.email)) {
            toast.error('لطفا ایمیل خود را وارد کنید ');
            return false;
        } else if (validator.isEmpty(inputValues.password)) {
            toast.error('لطفا پسورد خود را وارد کنید');
            return false;
        } else if (!validator.isEmail(inputValues.email)) {
            toast.error('ایمیل به درستی وارد نشده است');
            return false;
        }
        return true;
    };

    const submitHandler = () => {
        if (validate()) {
            setLoader(true);
            AdminLogin(inputValues)
                .then(res => {
                    localStorage.setItem('adminToken', res.data.token);
                    dispatch(AdminLoginStatusHandler(true));
                    navigate('/admin-panel/dashboard');
                })
                .finally(() => {
                    setLoader(false);
                });
        }
    };

    return (
        <LoginStyle image={image}>
            <div className='imageBlur'></div>
            <div className='container'>
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
                        <CustomButton
                            className='btn'
                            background='garadient'
                            text='ورود به حساب'
                            variant='text'
                            radius='normal'
                            fontcolor='white'
                            clickHandeler={submitHandler}
                            loader={loader}
                        />
                    </form>
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
