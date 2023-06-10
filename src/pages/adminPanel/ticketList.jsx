/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';
import TicketDetailModal from '../../components/pages/adminPanel/ticketList/ticketDetailsModal';
import AnswerTicketModal from '../../components/pages/adminPanel/ticketList/ticketAnswerModal';
import Pagination from '../../components/template/pagination';

//Assets
import { MainField } from '../../assets/styles/adminPanel/ticketList.style';

//APIs
import { GetAllTickets, AuthStatusHandler } from '../../api-requests/admin/ticket';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'عنوان تیکت', 'وضعیت', 'نام کاربر', 'تاریخ ارسال', 'تنظیمات'];

const TicketList = () => {
    const [reLoad, setReLoad] = useState(false);
    const [ticketList, setTicketList] = useState([]);
    const [specificTicket, setSpecificTicket] = useState();
    const [detailsModalStatus, setDetailsModalStatus] = useState(false);
    const [answerModalStatus, setAnswerModalStatus] = useState(false);
    const [ticketId, setTicketId] = useState(0);
    const [pageState, setPageState] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        GetAllTickets(pageState.current).then(res => {
            setTicketList(res.data.data);
            setPageState({
                ...pageState,
                total: res.data.total
            });
        });
    }, [reLoad, pageState.current]);

    const editModalHandler = data => {
        setDetailsModalStatus(true);
        setSpecificTicket(data);
    };

    const answerModalhandler = id => {
        setAnswerModalStatus(true);
        setTicketId(id);
    };

    const authHandler = (id, is_verify) => {
        AuthStatusHandler(id, { is_verify }).then(() => {
            setReLoad(!reLoad);
        });
    };

    return (
        <MainField>
            <h2>لیست تیکت ها</h2>
            <div className='table_field'>
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
                            <TableCell>{item.created}</TableCell>
                            <TableCell>{item.updated}</TableCell>
                            <TableCell>
                                <div className='button_group'>
                                    <CustomButton
                                        text='جزئیات'
                                        variant='text'
                                        radius='normal'
                                        background='warning'
                                        fontcolor='white'
                                        extraClass='table_button'
                                        clickHandeler={() => editModalHandler(item)}
                                    />
                                    {item.title !== 'تایید کارت ملی' ? (
                                        <CustomButton
                                            text='پاسخ'
                                            variant='text'
                                            radius='normal'
                                            background='warning'
                                            fontcolor='white'
                                            extraClass='table_button'
                                            clickHandeler={() => answerModalhandler(item.id)}
                                        />
                                    ) : (
                                        !item.answer && (
                                            <>
                                                <CustomButton
                                                    text='تایید هویت'
                                                    variant='text'
                                                    radius='normal'
                                                    background='success'
                                                    fontcolor='white'
                                                    extraClass='table_button'
                                                    clickHandeler={() => authHandler(item.id, 1)}
                                                />
                                                <CustomButton
                                                    text='عدم تایید هویت'
                                                    variant='text'
                                                    radius='normal'
                                                    background='error'
                                                    fontcolor='white'
                                                    extraClass='table_button'
                                                    clickHandeler={() => authHandler(item.id, 0)}
                                                />
                                            </>
                                        )
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
                <Pagination pageState={pageState} setPageState={setPageState} />
            </div>
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
