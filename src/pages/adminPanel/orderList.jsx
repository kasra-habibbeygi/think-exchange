/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';
import OrderDetailModal from '../../components/pages/adminPanel/orderList/orderDetailsModal';
import Pagination from '../../components/template/pagination';

//Assets
import { MainField } from '../../assets/styles/adminPanel/orderList';

//APIs
import { GetAllOrders, UpdateOrderStatus } from '../../api-requests/admin/orders';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'نام سرویس', 'وضعیت', 'کاربر', 'ارز', 'تاریخ ایجاد درخواست', 'تنظیمات'];

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const [infoModalStatus, setInfoModalStatus] = useState(false);
    const [reLoad, setReLoad] = useState(false);
    const [specificOrder, setSpecificOrder] = useState(); 
    const [pageState, setPageState] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        GetAllOrders(pageState.current)
            .then(res => {
                setOrderList(res.data.data);
                setPageState({
                    ...pageState,
                    total: res.data.last_page
                });
            });
    }, [pageState.current, reLoad]);

    const infoModalhandler = data => {
        setSpecificOrder(data);
        setInfoModalStatus(true);
    };

    const statusHandler = (id, status) => {
        UpdateOrderStatus(id, { status }).then(() => {
            setReLoad(!reLoad);
        });
    };

    return (
        <MainField>
            <div className='header'>
                <h2>لیست سفارش ها</h2>
            </div>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {orderList?.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell scope='row'>{index + 1}</TableCell>
                            <TableCell>{item.service.name}</TableCell>
                            <TableCell>
                                <CustomButton
                                    text={item.status === 'pending'
                                        ? 'در حال بررسی'
                                        : item.status === 'succeed'
                                            ? 'تایید شده'
                                            : item.status === 'failed'
                                                ? 'رد شده'
                                                : ''}
                                    variant='text'
                                    background={
                                        item.status === 'pending'
                                            ? 'warning'
                                            : item.status === 'succeed'
                                                ? 'success'
                                                : item.status === 'failed'
                                                    ? 'error'
                                                    : ''
                                    }
                                    radius='normal'
                                    fontcolor='white'
                                    disabled
                                />
                            </TableCell>
                            <TableCell>
                                {item.user.first_name} {item.user.last_name}
                            </TableCell>
                            <TableCell>
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
                                        clickHandeler={() => infoModalhandler(item)}
                                    />
                                    <CustomButton
                                        text='تایید'
                                        variant='text'
                                        radius='normal'
                                        fontcolor='black'
                                        extraClass='table_button'
                                        clickHandeler={() => statusHandler(item.id, 'succeed')}
                                        disabled={item.status !== 'pending'}
                                    />
                                    <CustomButton
                                        text='عدم تایید'
                                        variant='text'
                                        radius='normal'
                                        fontcolor='black'
                                        extraClass='table_button'
                                        clickHandeler={() => statusHandler(item.id, 'failed')}
                                        disabled={item.status !== 'pending'}
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
                <Pagination pageState={pageState} setPageState={setPageState} />
            </div>
            <OrderDetailModal status={infoModalStatus} setStatus={setInfoModalStatus} specificOrder={specificOrder} />
        </MainField>
    );
};

export default OrderList;
