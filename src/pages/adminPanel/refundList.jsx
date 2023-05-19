/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';

//Assets
import { MainField } from '../../assets/styles/adminPanel/refundList.style';

//APIs
import { GetAllRefunds } from '../../api-requests/admin/refund';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'نام ارز', 'قیمت', 'درصد نوسان', 'تاریخ ایجاد', 'تاریخ بروز رسانی', 'تنظیمات'];

const RefundList = () => {
    const [refundList, setRefundList] = useState([]);

    useEffect(() => {
        GetAllRefunds()
            .then(res => {
                setRefundList(res.data);
            })
            .catch(() => {});
    }, []);

    const editCurencyHandler = () => {};

    console.log(refundList);

    return (
        <MainField>
            <div className='header'>
                <h2>لیست ارز های سایت</h2>
                {/* <CustomButton text='مشاهده پاسخ' variant='text' background='garadient' radius='normal' fontcolor='white' /> */}
            </div>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {refundList?.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell scope='row'>{index + 1}</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <CustomButton
                                    text='ویرایش'
                                    variant='text'
                                    background='warning'
                                    radius='normal'
                                    fontcolor='white'
                                    extraClass='table_button'
                                    clickHandeler={() => editCurencyHandler(item)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
            </div>
        </MainField>
    );
};

export default RefundList;
