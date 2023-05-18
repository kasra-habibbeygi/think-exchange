/* eslint-disable camelcase */
import React, { useState } from 'react';

//style
import { OrderingStyle } from '../assets/styles/ordering.style';

//components
import SelectCurrencyType from '../components/pages/ordering/SelectCurrencyType';
import SelectOrderType from '../components/pages/ordering/SelectOrderType';
import AttachFile from '../components/pages/ordering/AttachFile';
import CompleteOrderInformation from '../components/pages/ordering/CompleteOrderInformation';

const Ordering = () => {
    const [inputValues, setInputValues] = useState({
        category: '',
        service: '',
        currency_id: '',
        currency_amount: '',
        exchange_amount: '',
        name: '',
        last_name: '',
        email: '',
        website: '',
        website_username: '',
        website_password: '',
        description: '',
        attachment: ''
    });

    return (
        <>
            <OrderingStyle>
                <SelectOrderType setInputValues={setInputValues} inputValues={inputValues} />
                <SelectCurrencyType setInputValues={setInputValues} inputValues={inputValues} />
            </OrderingStyle>
            <OrderingStyle>
                <CompleteOrderInformation setInputValues={setInputValues} inputValues={inputValues} />
                <AttachFile setInputValues={setInputValues} inputValues={inputValues} />
            </OrderingStyle>
        </>
    );
};

export default Ordering;
