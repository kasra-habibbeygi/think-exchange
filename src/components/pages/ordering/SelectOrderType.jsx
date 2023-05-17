import React from 'react';

//style
import { SelectOrderTypeStyle } from './SelectOrderType.style';

//components
import CustomSelect from '../../form-group/CustomSelect';

import { category, englishExampayment } from '../../../utils/const';

const SelectOrderType = () => {
    return (
        <SelectOrderTypeStyle>
            <h2>انتخاب نوع سفارش</h2>
            <div className='container'>
                <CustomSelect label='انتخاب دسته سفارش' SelectOptions={category} />
                <CustomSelect label='انتخاب سرویس' SelectOptions={englishExampayment} />
            </div>
        </SelectOrderTypeStyle>
    );
};

export default SelectOrderType;
