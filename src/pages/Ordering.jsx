import React from 'react';

//style
import { OrderingStyle } from '../assets/styles/ordering.style';

//components
import SelectCurrencyType from '../components/pages/ordering/SelectCurrencyType';
import SelectOrderType from '../components/pages/ordering/SelectOrderType';
import AttachFile from '../components/pages/ordering/AttachFile';
import CompleteOrderInformation from '../components/pages/ordering/CompleteOrderInformation';
import LayoutProvider from '../components/layouts/LayoutProvider';

const Ordering = () => {
    return (
        <>
            <LayoutProvider>
                <OrderingStyle>
                    <SelectOrderType />
                    <SelectCurrencyType />
                </OrderingStyle>
                <OrderingStyle>
                    <CompleteOrderInformation />
                    <AttachFile />
                </OrderingStyle>
            </LayoutProvider>
        </>
    );
};

export default Ordering;
