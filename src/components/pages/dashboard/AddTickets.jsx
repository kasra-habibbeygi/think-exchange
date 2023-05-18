/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

//components
import TableTemplate from '../../template/TableTemplate';
import CustomButton from '../../form-group/CustomButton';
import AddNewTicketsModal from './AddNewTicketsModal';
import SeeAnsewr from './SeeAnsewr';

//styles
import { AddTicketsStyle } from './AddTickets.style';

//mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableHeader = ['عنوان', 'تاریخ ثبت', 'وضعیت'];
// const row = [
//     {
//         id: 1,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'بررسی'
//     },
//     {
//         id: 2,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'ناموفق'
//     },
//     {
//         id: 3,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'مشاهده پاسخ'
//     },
//     {
//         id: 4,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'موفق'
//     },
//     {
//         id: 5,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'موفق'
//     },
//     {
//         id: 6,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'موفق'
//     },
//     {
//         id: 7,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'موفق'
//     },
//     {
//         id: 8,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'موفق'
//     },
//     {
//         id: 9,
//         name: 'پرداختی مسکن',
//         date: '1402/01/11',
//         status: 'موفق'
//     }
// ];

const AddTickets = ({ tickets }) => {
    const [AddNewTicketsModalState, setAddNewTicketsModalState] = useState(false);
    const [SeeAnsewrState, setSeeAnsewrState] = useState(false);

    return (
        <>
            <AddTicketsStyle>
                <h2>ثبت تیکت</h2>
                <div className='table_field'>
                    <TableTemplate TableHeader={TableHeader}>
                        {tickets?.map(row => (
                            <TableRow key={row.id}>
                                <TableCell scope='row'>
                                    {row.status === 'مشاهده پاسخ' ? (
                                        <div className='circleBox'>
                                            <span className='circle'></span>
                                            <span>{row.title}</span>
                                        </div>
                                    ) : (
                                        `${row.title}`
                                    )}
                                </TableCell>
                                <TableCell>{row.created}</TableCell>
                                <TableCell>
                                    {row.status !== 'مشاهده پاسخ' ? (
                                        <CustomButton
                                            text={
                                                row.status === 'pending'
                                                    ? 'بررسی'
                                                    : row.status === 'sucsses'
                                                    ? 'موفق'
                                                    : row.status === 'failed'
                                                    ? 'ناموفق'
                                                    : ''
                                            }
                                            variant='text'
                                            background={row.status === 'pending' ? 'warning' : 'error'}
                                            radius='normal'
                                            fontcolor='white'
                                        />
                                    ) : (
                                        <CustomButton
                                            clickHandeler={() => setSeeAnsewrState(true)}
                                            text={row.status}
                                            variant='text'
                                            background='noColor'
                                            radius='normal'
                                            fontcolor='error'
                                            disabled
                                        />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableTemplate>
                </div>
                <div className='btn'>
                    <CustomButton
                        className='btn'
                        text='ثبت تیکت'
                        variant='text'
                        background='garadient'
                        radius='normal'
                        fontcolor='white'
                        clickHandeler={() => setAddNewTicketsModalState(true)}
                    />
                </div>
            </AddTicketsStyle>
            <AddNewTicketsModal state={AddNewTicketsModalState} setState={setAddNewTicketsModalState} />
            <SeeAnsewr state={SeeAnsewrState} setState={setSeeAnsewrState} />
        </>
    );
};

export default AddTickets;
