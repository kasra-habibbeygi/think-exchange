/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';

//Assets
import { ModalField } from './orderDetailsModal.style';

//MUI
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../../../form-group/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const OrderDetailModal = ({ specificOrder, status, setStatus }) => {
    return (
        <ModalField>
            <Dialog open={status} TransitionComponent={Transition} keepMounted onClose={() => setStatus(false)} disablePortal>
                <div className='modalBox'>
                    <h2>جزئیات سفارش</h2>
                    <div className='info_row'>
                        <p>نام سرویس : </p>
                        <span>{specificOrder?.service.name}</span>
                    </div>
                    <div className='info_row'>
                        <p>نام کاربر : </p>
                        <span>
                            {specificOrder?.user.first_name} {specificOrder?.user.last_name}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>نام ارز : </p>
                        <span>
                            {specificOrder?.currency.name} - {specificOrder?.currency.iso_name}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>وضعیت : </p>
                        <span>{specificOrder?.status === 'pending' ? 'جدید' : 'پاسخ داده شده'}</span>
                    </div>
                    <div className='info_row'>
                        <p>مقدار ارز : </p>
                        <span>{specificOrder?.currency_amount}</span>
                    </div>
                    <div className='info_row'>
                        <p>مقدار ارز به ریال :</p>
                        <span>{specificOrder?.exchange_amount}</span>
                    </div>
                    <div className='info_row'>
                        <p>لینک سایت :</p>
                        <span>
                            <a href={specificOrder?.website} target='_blank' rel='noreferrer'>
                                {specificOrder?.website}
                            </a>
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>پسورد سایت :</p>
                        <span>{specificOrder?.website_password}</span>
                    </div>
                    <div className='info_row'>
                        <p>نام کاربری وب سایت :</p>
                        <span>{specificOrder?.website_username}</span>
                    </div>
                    <div className='info_row'>
                        <p>توضیحات :</p>
                        <span>{specificOrder?.description ?? '---'}</span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ درخواست :</p>
                        <span>
                            {specificOrder?.created_at.split('T')[0]} - {specificOrder?.created_at.split('T')[1].split('.')[0]}
                        </span>
                    </div>
                    <div className='info_row'>
                        <p>تاریخ بروزرسانی :</p>
                        <span>
                            {specificOrder?.updated_at.split('T')[0]} - {specificOrder?.updated_at.split('T')[1].split('.')[0]}
                        </span>
                    </div>
                    {specificOrder?.attachment && (
                        <div className='info_row image_field'>
                            <p>فایل مرتبط :</p>
                            <img src={process.env.REACT_APP_FILE_URL + specificOrder?.attachment} alt='' />
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

export default OrderDetailModal;
