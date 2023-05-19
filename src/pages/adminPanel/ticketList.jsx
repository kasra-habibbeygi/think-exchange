/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';
import TicketDetailModal from '../../components/pages/adminPanel/ticketList/ticketDetailsModal';
import AnswerTicketModal from '../../components/pages/adminPanel/ticketList/ticketAnswerModal';

//Assets
import { MainField } from '../../assets/styles/adminPanel/ticketList.style';

//APIs
import { GetAllTickets } from '../../api-requests/admin/ticket';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'عنوان تیکت', 'وضعیت', 'تاریخ ارسال', 'تاریخ بروز رسانی', 'تنظیمات'];

const TicketList = () => {
    const [reLoad, setReLoad] = useState(false);
    const [ticketList, setTicketList] = useState([]);
    const [specificTicket, setSpecificTicket] = useState();
    const [detailsModalStatus, setDetailsModalStatus] = useState(false);
    const [answerModalStatus, setAnswerModalStatus] = useState(false);
    const [ticketId, setTicketId] = useState(0);

    useEffect(() => {
        GetAllTickets()
            .then(res => {
                setTicketList(res.data);
            })
            .catch(() => {});
    }, [reLoad]);

    const editModalHandler = data => {
        setDetailsModalStatus(true);
        setSpecificTicket(data);
    };

    const answerModalhandler = id => {
        setAnswerModalStatus(true);
        setTicketId(id);
    };

    return (
        <MainField>
            <h2>لیست تیکت ها</h2>
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
                                    fontcolor='black'
                                    extraClass='table_button'
                                    clickHandeler={() => editModalHandler(item)}
                                />
                                <CustomButton
                                    text='پاسخ'
                                    variant='text'
                                    radius='normal'
                                    fontcolor='black'
                                    extraClass='table_button'
                                    clickHandeler={() => answerModalhandler(item.id)}
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableTemplate>
            <TicketDetailModal status={detailsModalStatus} setStatus={setDetailsModalStatus} specificTicket={specificTicket} />
            <AnswerTicketModal
                status={answerModalStatus}
                setStatus={setAnswerModalStatus}
                ticketId={ticketId}
                setReLoad={setReLoad}
                reLoad={reLoad}
            />
        </MainField>
    );
};

export default TicketList;
