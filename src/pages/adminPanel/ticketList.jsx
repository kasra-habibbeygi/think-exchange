/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';

//Assets
import { MainField } from '../../assets/styles/adminPanel/curenciesList.style';

//APIs
import { GetAllTickets } from '../../api-requests/admin/ticket';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'عنوان تیکت', 'وضعیت', 'تاریخ ارسال', 'تاریخ بروز رسانی', 'تنظیمات'];

const TicketList = () => {
    // const [reLoad, setReLoad] = useState(false);
    const [ticketList, setTicketList] = useState([]);
    // const [specificCurency, setSpecificCurency] = useState();
    // const [editModalStatus, setEditModalStatus] = useState(false);

    useEffect(() => {
        GetAllTickets()
            .then(res => {
                setTicketList(res.data);
            })
            .catch(() => {});
    }, []);

    const editCurencyHandler = () => {
        // setEditModalStatus(true);
        // setSpecificCurency(data);
    };

    return (
        <MainField>
            <div className='header'>
                <h2>لیست تیکت ها</h2>
                {/* <CustomButton text='مشاهده پاسخ' variant='text' background='garadient' radius='normal' fontcolor='white' /> */}
            </div>
            <TableTemplate TableHeader={TableHeader}>
                {ticketList?.map((item, index) => (
                    <TableRow key={item.id}>
                        <TableCell scope='row'>{index + 1}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>
                            <CustomButton
                                text={item.status === 'pending' ? 'جدید' : 'پاسخ داده شده'}
                                variant='text'
                                background={item.status === 'pending' ? 'warning' : 'success'}
                                radius='normal'
                                fontcolor='white'
                                disabled
                            />
                        </TableCell>
                        <TableCell>
                            {item.created_at.split('T')[0]} - {item.created_at.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell>
                            {item.updated_at.split('T')[0]} - {item.updated_at.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell>
                            <div className='button_group'>
                                <CustomButton
                                    text='جزئیات'
                                    variant='text'
                                    radius='normal'
                                    fontcolor='white'
                                    extraClass='table_button'
                                    clickHandeler={() => editCurencyHandler(item)}
                                />
                                <CustomButton
                                    text='پاسخ'
                                    variant='text'
                                    radius='normal'
                                    fontcolor='white'
                                    extraClass='table_button'
                                    clickHandeler={() => editCurencyHandler(item)}
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableTemplate>
        </MainField>
    );
};

export default TicketList;
