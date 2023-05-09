import React from 'react';

//style
import { OrderingStyle } from '../assets/styles/ordering.style';

//components
import SelectCurrencyType from '../components/pages/ordering/SelectCurrencyType';
import SelectOrderType from '../components/pages/ordering/SelectOrderType';
import AttachFile from '../components/pages/ordering/AttachFile';
import CompleteOrderInformation from '../components/pages/ordering/CompleteOrderInformation';

const Ordering = () => {
    return (
        <>
            <OrderingStyle>
                <SelectOrderType />
                <SelectCurrencyType />
            </OrderingStyle>
            <OrderingStyle>
                <CompleteOrderInformation />
                <AttachFile />
            </OrderingStyle>
        </>
    );
};

export default Ordering;
