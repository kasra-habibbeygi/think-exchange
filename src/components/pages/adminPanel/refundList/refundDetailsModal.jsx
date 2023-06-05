/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';

//Assets
import { ModalField } from './refundDetailsModal.style';

//MUI
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../../../form-group/CustomButton';

// Tools
import Tools from '../../../../utils/tools';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const RefundDetailsModal = ({ specificRefund, status, setStatus }) => {
    return (
        <ModalField>
            <Dialog open={status} TransitionComponent={Transition} keepMounted onClose={() => setStatus(false)} disablePortal>
                <div className='modalBox'>
                    <h2>جزئیات ریفاند</h2>
                    <div className='info_row'>
                        <p>نام سرویس : </p>
                        <span>{specificRefund?.order?.service?.name}</span>
                    </div>
                    <div className='info_row'>
                        <p>نام کاربر : </p>
                        <span>
                            {specificRefund?.order?.first_name} {specificRefund?.order?.last_name}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>ایمیل : </p>
                        <span>
                            {specificRefund?.order?.email}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>نام ارز : </p>
                        <span>
                            {specificRefund?.order?.currency?.name} - {specificRefund?.order?.currency?.iso_name}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>وضعیت : </p>
                        <span>
                            {specificRefund?.status === 'pending'
                                ? 'در حال بررسی'
                                : specificRefund?.status === 'succeed'
                                    ? 'تایید شده'
                                    : specificRefund?.status === 'failed'
                                        ? 'رد شده'
                                        : ''}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>مقدار ارز : </p>
                        <span>{specificRefund?.order?.currency_amount}</span>
                    </div>
                    <div className='info_row'>
                        <p>مقدار ارز به ریال :</p>
                        <span>{Tools.addCommaInNumbers(specificRefund?.order?.exchange_amount ?? 0)}</span>
                    </div>
                    <div className='info_row'>
                        <p>لینک سایت :</p>
                        <span>
                            <a href={specificRefund?.order?.website} target='_blank' rel='noreferrer'>
                                {specificRefund?.order?.website}
                            </a>
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>پسورد سایت :</p>
                        <span>{specificRefund?.order?.website_password}</span>
                    </div>
                    <div className='info_row'>
                        <p>نام کاربری وب سایت :</p>
                        <span>{specificRefund?.order?.website_username}</span>
                    </div>
                    <div className='info_row'>
                        <p>توضیحات :</p>
                        <span>{specificRefund?.description ?? '---'}</span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ درخواست :</p>
                        <span>{specificRefund?.created_at.split('T')[0]} - {specificRefund?.created_at.split('T')[1].split('.')[0]}</span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ بروزرسانی :</p>
                        <span>
                            {specificRefund?.updated_at.split('T')[0]} - {specificRefund?.updated_at.split('T')[1].split('.')[0]}
                        </span>
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

export default RefundDetailsModal;
