/* eslint-disable indent */
import React, { useEffect, useState } from 'react';

//styles
import { RefundStyles } from './Refund.styles';

//components
import TableTemplate from '../../template/TableTemplate';
import CustomButton from '../../form-group/CustomButton';

//mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//API
import { GetRefund } from '../../../api-requests/refund';

const TableHeader = ['نوع', 'وضعیت'];

const Refund = () => {
    const [refundsRequest, setRefundsRequest] = useState([]);

    useEffect(() => {
        GetRefund()
            .then(res => {
                setRefundsRequest(res.data);
            })
            .catch(() => {});
    }, []);

    console.log(refundsRequest);
    return (
        <RefundStyles>
            <h2>لیست درخواست های ریفاند</h2>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {refundsRequest.map(row => (
                        <TableRow key={row.id}>
                            <TableCell scope='row'>{row.refund && row.service?.name}</TableCell>
                            <TableCell>
                                <CustomButton
                                    text={
                                        row.refund?.status === 'pending'
                                            ? 'بررسی'
                                            : row.refund?.status === 'accepted'
                                            ? 'موفق'
                                            : row.refund?.status === 'rejected'
                                            ? 'ناموفق'
                                            : ''
                                    }
                                    variant='text'
                                    background={row.refund?.status === 'pending' ? 'warning' : 'error'}
                                    radius='normal'
                                    fontcolor='white'
                                    disabled
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
            </div>
        </RefundStyles>
    );
};

export default Refund;
