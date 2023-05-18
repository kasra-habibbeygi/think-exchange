/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';

//style
import { SelectOrderTypeStyle } from './SelectOrderType.style';

//components
import CustomSelect from '../../form-group/CustomSelect';

// Utils
import * as options from '../../../utils/const';

const SelectOrderType = ({ setInputValues, inputValues }) => {
    const serviceProvider = () => {
        if (inputValues.category === 'پرداختی امتحان زبان') {
            return options.englishExampayment;
        } else if (inputValues.category === 'پرداختی دوره های آنلاین') {
            return options.onlineCoursesPayment;
        } else if (inputValues.category === 'پرداختی های دانشگاهی و مدرسه') {
            return options.universityAndSchoolPayment;
        } else if (inputValues.category === 'پرداختی هتل و بیلط هواپیما') {
            return options.hotelAndPlanPayment;
        } else if (inputValues.category === 'پرداختی مروبط به سفارت') {
            return options.embassyPayment;
        }
        return [];
    };

    return (
        <SelectOrderTypeStyle>
            <h2>انتخاب نوع سفارش</h2>
            <div className='container'>
                <CustomSelect
                    label='انتخاب دسته سفارش'
                    SelectOptions={options.category}
                    setInputValues={setInputValues}
                    inputValues={inputValues}
                    name='category'
                />
                <CustomSelect
                    label='انتخاب سرویس'
                    SelectOptions={serviceProvider()}
                    setInputValues={setInputValues}
                    inputValues={inputValues}
                    name='service'
                />
            </div>
        </SelectOrderTypeStyle>
    );
};

export default SelectOrderType;
