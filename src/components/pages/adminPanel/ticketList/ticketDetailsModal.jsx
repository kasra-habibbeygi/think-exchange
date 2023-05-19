/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

//Assets
import { ModalField } from './ticketDetailsModal.style';

//MUI
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../../../form-group/CustomButton';

// APIs
import { GetUserInfo } from '../../../../api-requests/admin/user';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const TicketDetailModal = ({ specificTicket, status, setStatus }) => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (specificTicket) {
            GetUserInfo(specificTicket?.user_id).then(res => {
                setUserInfo(res.data);
            });
        }
    }, [specificTicket?.user_id]);

    return (
        <ModalField>
            <Dialog open={status} TransitionComponent={Transition} keepMounted onClose={() => setStatus(false)} disablePortal>
                <div className='modalBox'>
                    <h2>جزئیات تیکت</h2>
                    <div className='info_row'>
                        <p>نام کاربر : </p>
                        <span>
                            {userInfo?.first_name} {userInfo?.last_name}
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
                        <span>{specificTicket?.text}</span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ ارسال : </p>
                        <span>
                            {specificTicket?.created_at.split('T')[0]} - {specificTicket?.created_at.split('T')[1].split('.')[0]}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ بروز رسانی : </p>
                        <span>
                            {specificTicket?.updated_at.split('T')[0]} - {specificTicket?.updated_at.split('T')[1].split('.')[0]}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>جواب شما : </p>
                        <span>{specificTicket?.answer}</span>
                    </div>
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
