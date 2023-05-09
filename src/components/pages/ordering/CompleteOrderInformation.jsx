import React from 'react';

//style
import { CompleteOrderInformationStyle } from './CompleteOrderInformation.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';

const CompleteOrderInformation = () => {
    return (
        <CompleteOrderInformationStyle>
            <CustomInput label='نام' type='text' />
            <TextaAria label='توضیحات' type='text' />
        </CompleteOrderInformationStyle>
    );
};

export default CompleteOrderInformation;
