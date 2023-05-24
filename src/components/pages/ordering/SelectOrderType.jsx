/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

//style
import { SelectOrderTypeStyle } from './SelectOrderType.style';

//components
import CustomSelect from '../../form-group/CustomSelect';

// APIs
import { GetAllCategories, GetServicesList } from '../../../api-requests/Categories';

const SelectOrderType = ({ setInputValues, inputValues, setBuyCurrency }) => {
    const [categoriesList, setCategoriesList] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        GetAllCategories().then(res => {
            setCategoriesList(res.data);
        });
    }, []);

    useEffect(() => {
        if (categoryId !== 0) {
            GetServicesList(categoryId.category_id).then(res => {
                if (res.data.services) {
                    setServicesList(res.data.services);
                } else {
                    setServicesList(res.data);
                }
            });
        }
    }, [categoryId]);

    return (
        <SelectOrderTypeStyle>
            <h2>انتخاب نوع سفارش</h2>
            <div className='container'>
                <CustomSelect
                    label='انتخاب دسته سفارش'
                    SelectOptions={categoriesList}
                    setInputValues={setCategoryId}
                    inputValues={categoryId}
                    name='category_id'
                    objectKey='name'
                />
                <CustomSelect
                    label='انتخاب سرویس'
                    SelectOptions={servicesList}
                    setInputValues={setInputValues}
                    inputValues={inputValues}
                    name='service_id'
                    objectKey='name'
                    extraSetter={setBuyCurrency}
                />
            </div>
        </SelectOrderTypeStyle>
    );
};

export default SelectOrderType;
