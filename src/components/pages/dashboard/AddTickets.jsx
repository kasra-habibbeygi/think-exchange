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

const AddTickets = ({ tickets }) => {
    const [AddNewTicketsModalState, setAddNewTicketsModalState] = useState(false);
    const [SeeAnsewrState, setSeeAnsewrState] = useState(false);
    const [ansewr, setAnsewr] = useState({
        ansewr: '',
        title: '',
        id: ''
    });

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
                                    <CustomButton
                                        variant='text'
                                        text={row.status === 'pending' ? 'بررسی' : 'مشاهده پاسخ'}
                                        background={row.status === 'pending' ? 'warning' : ''}
                                        radius='normal'
                                        fontcolor={row.status === 'pending' ? 'white' : 'error'}
                                        disabled={row.status === 'pending' ? true : false}
                                        clickHandeler={
                                            row.status !== 'pending' &&
                                            (() => {
                                                setSeeAnsewrState(true);
                                                setAnsewr({
                                                    id: row.id,
                                                    ansewr: row.answer,
                                                    title: row.title
                                                });
                                            })
                                        }
                                    />
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
            <SeeAnsewr state={SeeAnsewrState} setState={setSeeAnsewrState} ansewr={ansewr} />
        </>
    );
};

export default AddTickets;
