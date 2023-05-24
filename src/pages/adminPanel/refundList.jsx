/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';
import RefundDetailsModal from '../../components/pages/adminPanel/refundList/refundDetailsModal';

//Assets
import { MainField } from '../../assets/styles/adminPanel/refundList.style';

//APIs
import { GetAllRefunds, UpdateRefundStatus } from '../../api-requests/admin/refund';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'نام', 'سرویس', 'ارز', 'وضعیت', 'تاریخ ارسال', 'تنظیمات'];

const RefundList = () => {
    const [refundList, setRefundList] = useState([]);
    const [infoModalStatus, setInfoModalStatus] = useState(false);
    const [reLoad, setReLoad] = useState(false);
    const [specificRefund, setSpecificRefund] = useState(); 
    const [pageState, setPageState] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        GetAllRefunds(pageState.current)
            .then(res => {
                setRefundList(res.data.data);
                setPageState({
                    ...pageState,
                    total: res.data.last_page
                });
            });
    }, [reLoad, pageState.current]);
    
    const infoModalhandler = data => {
        setSpecificRefund(data);
        setInfoModalStatus(true);
    };
    
    const statusHandler = (id, status) => {
        UpdateRefundStatus(id, { status }).then(() => {
            setReLoad(!reLoad);
        });
    };

    return (
        <MainField>
            <div className='header'>
                <h2>لیست درخواست های ریفاند</h2>
            </div>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {refundList?.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell scope='row'>{index + 1}</TableCell>
                            <TableCell>
                                {item.order.user.first_name} {item.order.user.last_name}
                            </TableCell>
                            <TableCell>{item.order.service.name}</TableCell>
                            <TableCell>
                                {item.order.currency.name} - {item.order.currency.iso_name}
                            </TableCell>
                            <TableCell>
                                <CustomButton
                                    text={
                                        item.status === 'pending'
                                            ? 'در حال بررسی'
                                            : item.status === 'succeed'
                                                ? 'تایید شده'
                                                : item.status === 'failed'
                                                    ? 'رد شده'
                                                    : ''
                                    }
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
                            <TableCell>{item?.created}</TableCell>
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
            </div>
            <RefundDetailsModal status={infoModalStatus} setStatus={setInfoModalStatus} specificRefund={specificRefund} />
        </MainField>
    );
};

export default RefundList;
