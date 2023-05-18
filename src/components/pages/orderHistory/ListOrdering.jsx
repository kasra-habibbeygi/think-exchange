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

const row = [
    {
        id: 1,
        name: 'پرداختی مسکن',
        date: '234235',
        status: 'بررسی'
    },
    {
        id: 2,
        name: 'پرداختی مسکن',
        date: '42534',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '32423',
        status: 'ناموفق'
    }
];

const TableHeader = ['نوع', 'شماره سفارش', 'وضعیت', ''];

const ListOrdering = () => {
    const [seeRefund, setSeeRefund] = useState(false);

    return (
        <>
            <AddRefundModal state={seeRefund} setState={setSeeRefund} />
            <ListOrderingStyle>
                <h2>فهرست سفارش ها</h2>
                <div className='table_field'>
                    <TableTemplate TableHeader={TableHeader}>
                        {row.map(row => (
                            <TableRow key={row.id}>
                                <TableCell scope='row'>{row.name}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>
                                    <CustomButton text={row.status} variant='text' background='warning' radius='normal' fontcolor='white' />
                                </TableCell>
                                <TableCell>
                                    <CustomButton
                                        text='درخواست ریفاند'
                                        variant='text'
                                        background='nonColor'
                                        radius='normal'
                                        fontcolor='black'
                                        clickHandeler={() => setSeeRefund(true)}
                                    />
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
