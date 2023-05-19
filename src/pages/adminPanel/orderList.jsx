/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';

//Assets
import { MainField } from '../../assets/styles/adminPanel/orderList';

//APIs
import { GetAllOrders } from '../../api-requests/admin/orders';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'نام سرویس', 'وضعیت', 'کاربر', 'ارز', 'تاریخ ایجاد درخواست', 'تنظیمات'];

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        GetAllOrders()
            .then(res => {
                setOrderList(res.data);
            })
            .catch(() => {});
    }, []);

    const editModalHandler = () => {};

    return (
        <MainField>
            <div className='header'>
                <h2>لیست سفارش ها</h2>
            </div>
            <TableTemplate TableHeader={TableHeader}>
                {orderList?.map((item, index) => (
                    <TableRow key={item.id}>
                        <TableCell scope='row'>{index + 1}</TableCell>
                        <TableCell>{item.service.name}</TableCell>
                        <TableCell>
                            <CustomButton
                                text={item.status === 'pending' ? 'جدید' : 'پاسخ داده شده'}
                                variant='text'
                                background={item.status === 'pending' ? 'warning' : 'success'}
                                radius='normal'
                                fontcolor='white'
                                disabled
                            />
                        </TableCell>
                        <TableCell>
                            {item.user.first_name} {item.user.last_name}
                        </TableCell>
                        <TableCell>
                            {' '}
                            {item.currency.name} - {item.currency.iso_name}
                        </TableCell>
                        <TableCell>
                            {item.created_at.split('T')[0]} - {item.created_at.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell>
                            <div className='button_group'>
                                <CustomButton
                                    text='جزئیات'
                                    variant='text'
                                    radius='normal'
                                    fontcolor='black'
                                    extraClass='table_button'
                                    clickHandeler={() => editModalHandler(item)}
                                />
                                <CustomButton
                                    text='تایید'
                                    variant='text'
                                    radius='normal'
                                    fontcolor='black'
                                    extraClass='table_button'
                                    clickHandeler={() => details(item.id)}
                                />
                                <CustomButton
                                    text='رد'
                                    variant='text'
                                    radius='normal'
                                    fontcolor='black'
                                    extraClass='table_button'
                                    clickHandeler={() => details(item.id)}
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableTemplate>
        </MainField>
    );
};

export default OrderList;
