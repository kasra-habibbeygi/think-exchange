/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';

//Assets
import { ModalField } from './ticketDetailsModal.style';

//MUI
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../../../form-group/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const TicketDetailModal = ({ specificTicket, status, setStatus }) => {
    return (
        <ModalField>
            <Dialog open={status} TransitionComponent={Transition} keepMounted onClose={() => setStatus(false)} disablePortal>
                <div className='modalBox'>
                    <h2>جزئیات تیکت</h2>
                    <div className='info_row'>
                        <p>نام کاربر : </p>
                        <span>
                            {specificTicket?.user?.first_name} {specificTicket?.user?.last_name}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>عنوان : </p>
                        <span>{specificTicket?.title}</span>
                    </div>
                    <div className='info_row'>
                        <p>وضعیت : </p>
                        <span>{specificTicket?.status === 'pending' ? 'جدید' : 'پاسخ داده شده'}</span>
                    </div>
                    <div className='info_row'>
                        <p>توضیحات : </p>
                        <span>{specificTicket?.text || '---'}</span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ ارسال : </p>
                        <span>{specificTicket?.created}</span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ بروز رسانی : </p>
                        <span>{specificTicket?.updated}</span>
                    </div>
                    <div className='info_row'>
                        <p>جواب شما : </p>
                        <span>{specificTicket?.answer || '---'}</span>
                    </div>
                    {specificTicket?.attachment && (
                        <div className='info_row image_field'>
                            <p>فایل مرتبط :</p>
                            <img src={process.env.REACT_APP_FILE_URL + specificTicket?.attachment} alt='' />
                        </div>
                    )}
                    <div className='btnBox'>
                        <CustomButton
                            clickHandeler={() => setStatus(false)}
                            className='close'
                            text='بازگشت'
                            variant='outlined'
                            background='white'
                            radius='normal'
                            fontcolor='black'
                        />
                    </div>
                </div>
            </Dialog>
        </ModalField>
    );
};

export default TicketDetailModal;
