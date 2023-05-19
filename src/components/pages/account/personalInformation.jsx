/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import validator from 'validator';

//style
import { PersonalInformationStyle } from './personalInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextArea from '../../form-group/TextArea';
import CustomButton from '../../form-group/CustomButton';

//API
import { GetUserDashboard } from '../../../api-requests/user';
import { PutUserProfile } from '../../../api-requests/profile';

const PersonalInformation = ({ state, setState }) => {
    const [getData, setGetData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        home_phone: '',
        national_code: '',
        password: '',
        password_confirmation: '',
        explain: '',
        nationalCartFile: ''
    });

    useEffect(() => {
        GetUserDashboard()
            .then(res => {
                setGetData(res.data.user);
            })
            .catch(() => {});
    }, []);

    const changeHandeler = e => {
        const { value, name } = e.target;
        let formattedValue = value;
        if (name === 'home_phone') {
            formattedValue = value.replace(/[^0-9]/g, '');
        } else if (name === 'phone') {
            formattedValue = value.replace(/[^0-9]/g, '');
        } else if (name === 'national_code') {
            formattedValue = value.replace(/[^0-9]/g, '');
        }

        setState({ ...state, [name]: formattedValue });
    };

    const validatFrom = () => {
        if (validator.isEmpty(state.first_name)) {
            toast.error('نام  خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(state.last_name)) {
            toast.error('نام خانوادگی خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(state.email)) {
            toast.error('ایمیل خود را وارد کنید');
            return false;
        } else if (!validator.isEmail(state.email)) {
            toast.error('ایمیل را به درستی وارد کنید');
            return false;
        } else if (validator.isEmpty(state.phone)) {
            toast.error('شماره تماس  خود را وارد کنید');
            return false;
        } else if (state.phone.length < 11) {
            toast.error(' شماره تماس خود را به درستی وارد کنید');
            return false;
        } else if (validator.isEmpty(state.home_phone)) {
            toast.error(' شماره ثابت  خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(state.national_code)) {
            toast.error(' شماره ملی  خود را وارد کنید');
            return false;
        } else if (state.national_code.length < 10) {
            toast.error(' شماره ملی باید 10 کاراکتر باشد');
            return false;
        }
        return true;
    };

    const PostFormDataHandeler = () => {
        if (validatFrom()) {
            PutUserProfile(state).then(() => {
                toast.success('اطلاعات شما با موفقیت تغییر کرد');
            });
        }
    };

    return (
        <PersonalInformationStyle>
            <h2>تکمیل اطلاعات حساب</h2>
            <div className='formBox'>
                <CustomInput
                    label='نام'
                    name='first_name'
                    value={getData?.first_name}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
                <CustomInput
                    label='نام خانوادگی'
                    name='last_name'
                    value={getData?.last_name}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
            </div>

            <CustomInput label='ایمیل' name='email' value={getData?.email} type='email' id='outlined-basic' valuehandler={changeHandeler} />

            <div className='formBox'>
                <CustomInput
                    label='شماره همراه فعال در فضای مجازی'
                    name='phone'
                    value={getData?.phone}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
                <CustomInput
                    label='شماره ثابت'
                    name='home_phone'
                    value={getData?.home_phone}
                    type='text'
                    id='outlined-basic'
                    valuehandler={changeHandeler}
                />
            </div>
            <CustomInput
                label='شماره ملی'
                name='national_code'
                value={getData?.national_code}
                type='text'
                id='outlined-basic'
                valuehandler={changeHandeler}
                maxLength='10'
            />
            <TextArea label='توضیحات' name='explain' value={getData?.explain} type='text' rows={4} valuehandler={changeHandeler} />
            <CustomButton
                clickHandeler={PostFormDataHandeler}
                className='btn'
                text='ویرایش اطلاعات'
                variant='text'
                background='garadient'
                radius='normal'
                fontcolor='white'
            />
        </PersonalInformationStyle>
    );
};

export default PersonalInformation;
