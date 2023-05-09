import React from 'react';

//style
import { SelectOrderTypeStyle } from './SelectOrderType.style';

//components
import CustomSelect from '../../form-group/CustomSelect';

const SelectOrderType = () => {
    const order = [
        {
            id: 1,
            label: 'پرداختی مسکن'
        },
        {
            id: 1,
            label: 'پرداختی مسکن'
        },
        {
            id: 1,
            label: 'پرداختی مسکن'
        },
        {
            id: 1,
            label: 'پرداختی مسکن'
        }
    ];

    return (
        <SelectOrderTypeStyle>
            <h2>انتخاب نوع سفارش</h2>
            <div className='container'>
                <CustomSelect label='انتخاب دسته سفارش' SelectOptions={order} />
                <CustomSelect label='انتخاب سرویس' SelectOptions={order} />
            </div>
        </SelectOrderTypeStyle>
    );
};

export default SelectOrderType;
