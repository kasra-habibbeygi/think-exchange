/* eslint-disable react/prop-types */
import React, { useState } from 'react';

//style
import { CompleteOrderInformationStyle } from './CompleteOrderInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextArea from '../../form-group/TextArea';
import CustomButton from '../../form-group/CustomButton';
import SuccessAlert from '../../template/SuccessAlert';

const CompleteOrderInformation = ({ setInputValues, inputValues }) => {
    const [SuccessOrderingState, setSuccessOrderingState] = useState(false);

    const inputValueHandler = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <CompleteOrderInformationStyle>
                <h2>تکمیل اطلاعات سفارش</h2>
                <div className='formBox'>
                    <CustomInput label='نام' type='text' name='name' value={inputValues.name} valuehandler={e => inputValueHandler(e)} />
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
                    clickHandeler={() => setSuccessOrderingState(true)}
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
