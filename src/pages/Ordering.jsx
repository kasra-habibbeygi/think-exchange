/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

//Assets
import { OrderingStyle } from '../assets/styles/ordering.style';
// import Alert from '../assets/images/ordering/warning.svg';

//Components
import SelectCurrencyType from '../components/pages/ordering/SelectCurrencyType';
import SelectOrderType from '../components/pages/ordering/SelectOrderType';
import AttachFile from '../components/pages/ordering/AttachFile';
import CompleteOrderInformation from '../components/pages/ordering/CompleteOrderInformation';
// import CustomButton from '../components/form-group/CustomButton';

// APIs
import { GetUserDashboard } from '../api-requests/user';

const Ordering = () => {
    const [buyCurrency, setBuyCurrency] = useState({});
    // const [isVerify, setIsVerify] = useState(1);
    const [inputValues, setInputValues] = useState({
        service_id: '',
        currency_id: '',
        currency_amount: '',
        exchange_amount: '',
        first_name: '',
        last_name: '',
        email: '',
        website: '',
        website_username: '',
        website_password: '',
        description: '',
        attachment: ''
    });

    useEffect(() => {
        GetUserDashboard().then(() => {
            // setIsVerify(res.data.user.is_verified);
        });
    }, []);

    return (
        <>
            <OrderingStyle>
                <SelectOrderType setInputValues={setInputValues} inputValues={inputValues} setBuyCurrency={setBuyCurrency} />
                <SelectCurrencyType setInputValues={setInputValues} inputValues={inputValues} buyCurrency={buyCurrency} />
            </OrderingStyle>
            <OrderingStyle>
                <CompleteOrderInformation setInputValues={setInputValues} inputValues={inputValues} />
                <AttachFile setInputValues={setInputValues} inputValues={inputValues} />
            </OrderingStyle>
            {/* {isVerify ? (
                <>
                    
                </>
            ) : (
                <AlertField>
                    <img src={Alert} alt='' />
                    <p>
                        قبل از ثبت سفارش ابتدا مشخصات کاربری خود را در صفحه حساب کاربری تکمیل کنید ، شما میتوانید پس از تایید اطلاعات خود
                        توسط ادمین، سفارش خود را ثبت کنید
                    </p>
                    <Link to='/account'>
                        <CustomButton text='تکمیل اطلاعات' variant='text' background='garadient' radius='normal' fontcolor='white' />
                    </Link>
                </AlertField>
            )} */}
        </>
    );
};

export default Ordering;
