/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

//components
import TableTemplate from '../../template/TableTemplate';
import CustomButton from '../../form-group/CustomButton';

//styles
import { ListOrderingStyle } from './ListOrdering.styles';

//mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// const row = [
//     {
//         id: 1,
//         name: 'پرداختی مسکن',
//         date: '23523',
//         status: 'بررسی'
//     },
//     {
//         id: 2,
//         name: 'پرداختی مسکن',
//         date: '23523',
//         status: 'ناموفق'
//     },
//     {
//         id: 3,
//         name: 'پرداختی مسکن',
//         date: '3252',
//         status: 'ناموفق'
//     },
//     {
//         id: 4,
//         name: 'پرداختی مسکن',
//         date: '3252',
//         status: 'ناموفق'
//     },
//     {
//         id: 5,
//         name: 'پرداختی مسکن',
//         date: '3252',
//         status: 'ناموفق'
//     },
//     {
//         id: 6,
//         name: 'پرداختی مسکن',
//         date: '3252',
//         status: 'ناموفق'
//     },
//     {
//         id: 7,
//         name: 'پرداختی مسکن',
//         date: '3252',
//         status: 'ناموفق'
//     },
//     {
//         id: 8,
//         name: 'پرداختی مسکن',
//         date: '3252',
//         status: 'ناموفق'
//     },
//     {
//         id: 9,
//         name: 'پرداختی مسکن',
//         date: '3252',
//         status: 'ناموفق'
//     }
// ];

const TableHeader = ['نوع', 'شماره سفارش', 'وضعیت'];

const ListOrdering = ({ orderHistory }) => {
    console.log(orderHistory);
    return (
        <ListOrderingStyle>
            <h2>فهرست سفارش ها</h2>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {orderHistory?.map(row => (
                        <TableRow key={row.id}>
                            <TableCell scope='row'>{row.service.name}</TableCell>
                            <TableCell>{row.service_id}</TableCell>
                            <TableCell>
                                <CustomButton
                                    text={
                                        row.status === 'pending'
                                            ? 'بررسی'
                                            : row.status === 'accepted'
                                            ? 'موفق'
                                            : row.status === 'rejected'
                                            ? 'ناموفق'
                                            : ''
                                    }
                                    variant='text'
                                    background={row.status === 'pending' ? 'warning' : 'error'}
                                    radius='normal'
                                    fontcolor='white'
                                    disabled
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
            </div>
            <Link to='/ordering'>
                <CustomButton text='ثبت سفارش' variant='text' background='garadient' radius='normal' fontcolor='white' />
            </Link>
        </ListOrderingStyle>
    );
};

export default ListOrdering;
