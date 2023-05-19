/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import validator from 'validator';

//style
import { CompleteOrderInformationStyle } from './CompleteOrderInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextArea from '../../form-group/TextArea';
import CustomButton from '../../form-group/CustomButton';
import SuccessAlert from '../../template/SuccessAlert';

// APIs
import { SubmitNewOrder } from '../../../api-requests/order';

const CompleteOrderInformation = ({ setInputValues, inputValues }) => {
    const formData = new FormData();
    const [SuccessOrderingState, setSuccessOrderingState] = useState(false);

    const inputValueHandler = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const validatFrom = () => {
        if (validator.isEmpty(inputValues.category_id)) {
            toast.error('دسته سفارش را انتخاب کنید');
            return false;
        } else if (validator.isEmpty(inputValues.service_id)) {
            toast.error('سروریس خود را انتخاب کنید');
            return false;
        } else if (validator.isEmpty(inputValues.currency_amount)) {
            toast.error('نوع سفارش خود را انتخاب کنید');
            return false;
        } else if (validator.isEmpty(inputValues.first_name)) {
            toast.error('نام خود را وراد کنید');
            return false;
        } else if (validator.isEmpty(inputValues.last_name)) {
            toast.error('نام خانوادگی خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(inputValues.email)) {
            toast.error('ایمیل خود را وارد کنید');
            return false;
        } else if (validator.isEmail(inputValues.email)) {
            toast.error('ایمیل خود را  به درستی وارد کنید');
            return false;
        } else if (validator.isEmpty(inputValues.website)) {
            toast.error('لینک سایت را وارد کنید');
            return false;
        } else if (validator.isEmpty(inputValues.website_username)) {
            toast.error('نام کاربری خود در سایت را وارد کنید');
            return false;
        } else if (validator.isEmpty(inputValues.website_password)) {
            toast.error('پسورد خود در سایت را وارد کنید');
            return false;
        }
        return true;
    };

    const submitButtonHandler = () => {
        if (validatFrom()) {
            const newData = {
                ...inputValues,
                exchange_amount: inputValues.exchange_amount.replaceAll(',', '')
            };

            Object.keys(newData).forEach(item => {
                formData.append(item, newData[item]);
            });

            setSuccessOrderingState(true);

            SubmitNewOrder(formData).then(() => {
                Object.keys(newData).forEach(item => formData.delete(item, newData[item]));
            });
        }
    };

    return (
        <>
            <CompleteOrderInformationStyle>
                <h2>تکمیل اطلاعات سفارش</h2>
                <div className='formBox'>
                    <CustomInput
                        label='نام'
                        type='text'
                        name='first_name'
                        value={inputValues.first_name}
                        valuehandler={e => inputValueHandler(e)}
                    />
                    <CustomInput
                        label='نام خانوادگی'
                        type='text'
                        name='last_name'
                        value={inputValues.last_name}
                        valuehandler={e => inputValueHandler(e)}
                    />
                </div>
                <div className='formBox'>
                    <CustomInput
                        label='ایمیل'
                        type='email'
                        name='email'
                        value={inputValues.email}
                        valuehandler={e => inputValueHandler(e)}
                    />
                    <CustomInput
                        label='لینک سایت'
                        type='text'
                        name='website'
                        value={inputValues.website}
                        valuehandler={e => inputValueHandler(e)}
                    />
                </div>
                <div className='formBox'>
                    <CustomInput
                        label='نام کاربری شما در سایت'
                        type='text'
                        name='website_username'
                        value={inputValues.website_username}
                        valuehandler={e => inputValueHandler(e)}
                    />
                    <CustomInput
                        label='کلمه عبور شما در سایت'
                        type='password'
                        name='website_password'
                        value={inputValues.website_password}
                        valuehandler={e => inputValueHandler(e)}
                    />
                </div>
                <TextArea
                    label='توضیحات'
                    type='text'
                    name='description'
                    value={inputValues.description}
                    valuehandler={e => inputValueHandler(e)}
                />
                <CustomButton
                    clickHandeler={submitButtonHandler}
                    className='btn'
                    text='ثبت سفارش'
                    variant='text'
                    background='garadient'
                    radius='normal'
                    fontcolor='white'
                />
            </CompleteOrderInformationStyle>
            <SuccessAlert
                state={SuccessOrderingState}
                setState={setSuccessOrderingState}
                text='سفارش شما با موفقیت ثبت شد همکاران ما اطلاعات پرداختی را تا ۲۴ ساعت آینده برای شما ارسال خواهند کرد ,لطفا از آنلاین
                        بودن خود در واتساپ مطمئن باشید .'
            />
        </>
    );
};

export default CompleteOrderInformation;
