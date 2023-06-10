/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components
import TableTemplate from '../../template/TableTemplate';
import CustomButton from '../../form-group/CustomButton';
import AddRefundModal from './AddRefundModal';

//styles
import { ListOrderingStyle } from './ListOrdering.styles';

//mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableHeader = ['نوع', 'شماره سفارش', 'وضعیت', ''];

const ListOrdering = ({ orderHistoryList, setReLoad, reLoad }) => {
    const [seeRefund, setSeeRefund] = useState(false);
    const [uniqId, setUniqId] = useState('');

    return (
        <>
            <AddRefundModal state={seeRefund} setState={setSeeRefund} orderId={uniqId} setReLoad={setReLoad} reLoad={reLoad} />
            <ListOrderingStyle>
                <h2>فهرست سفارش ها</h2>
                <div className='table_field'>
                    <TableTemplate TableHeader={TableHeader}>
                        {orderHistoryList?.map(item => (
                            <TableRow key={item.id}>
                                <TableCell scope='row'>{item.service.name}</TableCell>
                                <TableCell>{item.service_id}</TableCell>
                                <TableCell>
                                    <CustomButton
                                        text={
                                            item.status === 'pending'
                                                ? 'بررسی'
                                                : item.status === 'succeed'
                                                ? 'موفق'
                                                : item.status === 'failed'
                                                ? 'ناموفق'
                                                : ''
                                        }
                                        background={
                                            item.status === 'pending'
                                                ? 'warning'
                                                : item.status === 'succeed'
                                                ? 'success'
                                                : item.status === 'failed'
                                                ? 'error'
                                                : ''
                                        }
                                        variant='text'
                                        radius='normal'
                                        fontcolor='white'
                                        disabled
                                    />
                                </TableCell>
                                <TableCell>
                                    {item.status === 'succeed' && item.refund === null && (
                                        <CustomButton
                                            text='درخواست ریفاند'
                                            variant='text'
                                            background='nonColor'
                                            radius='normal'
                                            fontcolor='black'
                                            clickHandeler={() => {
                                                setSeeRefund(true);
                                                setUniqId(item.id);
                                            }}
                                        />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableTemplate>
                </div>
                <Link to='/ordering'>
                    <CustomButton text='ثبت سفارش جدید' variant='text' background='garadient' radius='normal' fontcolor='white' />
                </Link>
            </ListOrderingStyle>
        </>
    );
};

export default ListOrdering;
