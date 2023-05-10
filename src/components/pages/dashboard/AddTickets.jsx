import React, { useState } from 'react';

//components
import TableTemplate from '../../template/TableTemplate';
import CustomButton from '../../form-group/CustomButton';
import AddNewTicketsModal from './AddNewTicketsModal';

//styles
import { AddTicketsStyle } from './AddTickets.style';

//mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableHeader = ['عنوان', 'تاریخ ثبت', 'وضعیت'];
const row = [
    {
        id: 1,
        name: 'پرداختی مسکن',
        date: '1402/01/11',
        status: 'بررسی'
    },
    {
        id: 2,
        name: 'پرداختی مسکن',
        date: '1402/01/11',
        status: 'ناموفق'
    },
    {
        id: 3,
        name: 'پرداختی مسکن',
        date: '1402/01/11',
        status: 'مشاهده پاسخ'
    },
    {
        id: 4,
        name: 'پرداختی مسکن',
        date: '1402/01/11',
        status: 'موفق'
    }
];

const AddTickets = () => {
    const [AddNewTicketsModalState, setAddNewTicketsModalState] = useState(true);
    return (
        <>
            <AddTicketsStyle>
                <h2>ثبت تیکت</h2>
                <TableTemplate TableHeader={TableHeader}>
                    {row.map(row => (
                        <TableRow key={row.id}>
                            <TableCell scope='row'>
                                {row.status === 'مشاهده پاسخ' ? (
                                    <div className='circleBox'>
                                        <span className='circle'></span>
                                        <span>{row.name}</span>
                                    </div>
                                ) : (
                                    `${row.name}`
                                )}
                            </TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>
                                {row.status !== 'مشاهده پاسخ' ? (
                                    <CustomButton text={row.status} variant='text' background='error' radius='normal' fontcolor='white' />
                                ) : (
                                    <CustomButton text={row.status} variant='text' background='noColor' radius='normal' fontcolor='error' />
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
                <CustomButton
                    className='btn'
                    text='ثبت تیکت'
                    variant='text'
                    background='garadient'
                    radius='normal'
                    fontcolor='white'
                    onClick={() => setAddNewTicketsModalState(true)}
                />
            </AddTicketsStyle>
            <AddNewTicketsModal state={AddNewTicketsModalState} setState={setAddNewTicketsModalState} />
        </>
    );
};

export default AddTickets;
