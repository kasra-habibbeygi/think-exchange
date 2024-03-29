/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React from 'react';

//Assets
import { RefundStyles } from './Refund.styles';

//Components
import TableTemplate from '../../template/TableTemplate';
import CustomButton from '../../form-group/CustomButton';

//MUI
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableHeader = ['نوع', 'وضعیت'];

const Refund = ({ orderHistoryList }) => {
    return (
        <RefundStyles>
            <h2>لیست درخواست های ریفاند</h2>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {orderHistoryList.map(row => [
                        row.refund && (
                            <TableRow key={row.id}>
                                <TableCell scope='row'>{row.refund && row.service?.name}</TableCell>
                                <TableCell>
                                    <CustomButton
                                        text={
                                            row.refund?.status === 'pending'
                                                ? 'بررسی'
                                                : row.refund?.status === 'succeed'
                                                ? 'موفق'
                                                : row.refund?.status === 'failed'
                                                ? 'ناموفق'
                                                : ''
                                        }
                                        variant='text'
                                        background={
                                            row.refund?.status === 'pending'
                                                ? 'warning'
                                                : row.refund?.status === 'succeed'
                                                ? 'success'
                                                : row.refund?.status === 'failed'
                                                ? 'error'
                                                : ''
                                        }
                                        radius='normal'
                                        fontcolor='white'
                                        disabled
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    ])}
                </TableTemplate>
            </div>
        </RefundStyles>
    );
};

export default Refund;
