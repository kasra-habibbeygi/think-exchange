import React from 'react';

//styles
import { RefundStyles } from './Refund.styles';

//components
import TableTemplate from '../../template/TableTemplate';
import CustomButton from '../../form-group/CustomButton';

//mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//API
// import { GetRefund } from '../../../api-requests/refund';

const row = [
    {
        id: 1,
        name: 'پرداختی مسکن',
        status: 'بررسی'
    },
    {
        id: 2,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        status: 'ناموفق'
    }
];

const TableHeader = ['نوع', 'وضعیت'];

const Refund = () => {
    // const [refundsRequest, setRefundsRequest] = useState([]);

    // useEffect(() => {
    //     GetRefund()
    //         .then(res => {
    //             setRefundsRequest(res.data);
    //         })
    //         .catch(() => {
    //         });
    // }, []);

    return (
        <RefundStyles>
            <h2>لیست درخواست های ریفاند</h2>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {row.map(row => (
                        <TableRow key={row.id}>
                            <TableCell scope='row'>{row.name}</TableCell>
                            <TableCell>
                                <CustomButton text={row.status} variant='text' background='warning' radius='normal' fontcolor='white' />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
            </div>
        </RefundStyles>
    );
};

export default Refund;
