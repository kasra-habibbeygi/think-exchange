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

const ListOrdering = ({ orderList, setReLoad, reLoad }) => {
    const [seeRefund, setSeeRefund] = useState(false);
    const [uniqId, setUniqId] = useState('');

    return (
        <>
            <AddRefundModal state={seeRefund} setState={setSeeRefund} orderId={uniqId} setReLoad={setReLoad} reLoad={reLoad} />
            <ListOrderingStyle>
                <h2>فهرست سفارش ها</h2>
                <div className='table_field'>
                    <TableTemplate TableHeader={TableHeader}>
                        {orderList?.map(row => (
                            <TableRow key={row.id}>
                                <TableCell scope='row'>{row.service.name}</TableCell>
                                <TableCell>{row.service_id}</TableCell>
                                <TableCell>
                                    <CustomButton
                                        text={
                                            row.status === 'pending'
                                                ? 'بررسی'
                                                : row.status === 'succeed'
                                                ? 'موفق'
                                                : row.status === 'failed'
                                                ? 'ناموفق'
                                                : ''
                                        }
                                        background={
                                            row.status === 'pending'
                                                ? 'warning'
                                                : row.status === 'succeed'
                                                ? 'success'
                                                : row.status === 'failed'
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
                                    {row.status === 'pending' && (
                                        <CustomButton
                                            text='درخواست ریفاند'
                                            variant='text'
                                            background='nonColor'
                                            radius='normal'
                                            fontcolor='black'
                                            clickHandeler={() => {
                                                setSeeRefund(true);
                                                setUniqId(row.id);
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
