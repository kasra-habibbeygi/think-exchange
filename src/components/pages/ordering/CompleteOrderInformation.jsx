import React, { useState } from 'react';

//style
import { CompleteOrderInformationStyle } from './CompleteOrderInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';
import CustomButton from '../../form-group/CustomButton';
import SuccessAlert from '../../template/SuccessAlert';

const CompleteOrderInformation = () => {
    const [SuccessOrderingState, setSuccessOrderingState] = useState(false);
    return (
        <>
            <CompleteOrderInformationStyle>
                <h2>تکمیل اطلاعات سفارش</h2>
                <div className='formBox'>
                    <CustomInput label='نام' type='text' id='outlined-basic' />
                    <CustomInput label='نام خانوادگی' type='text' id='outlined-basic' />
                </div>
                <div className='formBox'>
                    <CustomInput label='ایمیل' type='email' id='outlined-basic' />
                    <CustomInput label='لینک سایت' type='text' id='outlined-basic' />
                </div>
                <div className='formBox'>
                    <CustomInput label='نام کاربری شما در سایت' type='text' id='outlined-basic' />
                    <CustomInput label='کلمه عبور شما در سایت' type='password' id='outlined-basic' />
                </div>
                <TextaAria label='توضیحات' type='text' rows={4} />
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
                text='    سفارش شما با موفقیت ثبت شد همکاران ما اطلاعات پرداختی را تا ۲۴ ساعت آینده برای شما ارسال خواهند کردلطفا از آنلاین
                        بودن خود در واتساپ مطمئن باشید .'
            />
        </>
    );
};

export default CompleteOrderInformation;
