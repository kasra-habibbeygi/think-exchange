/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import validator from 'validator';

//style
import { AddRefundModalStyle } from './AddRefundModal.style';

//mui
import Dialog from '@mui/material/Dialog';

//components
import TextArea from '../../form-group/TextArea';
import CustomButton from '../../form-group/CustomButton';
import SuccessAlert from '../../template/SuccessAlert';

//api
import { PostNewRefund } from '../../../api-requests/refund';

const AddRefundModal = ({ state, setState, orderId }) => {
    const [formData, setFormData] = useState({
        description: ''
    });
    const [SuccessAddTicketState, setSuccessAddTicketState] = useState(false);

    const handleClose = () => {
        setState(false);
    };

    const validatFrom = () => {
        if (validator.isEmpty(formData.text)) {
            toast.error('علت درخواست خود را بیان کنید');
        }
        return true;
    };

    const changeHandeler = e => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const addRefundHandeler = () => {
        if (validatFrom()) {
            PostNewRefund(formData, orderId).then(() => {
                setState(false);
                setSuccessAddTicketState(true);
            });
        }
    };

    return (
        <>
            <SuccessAlert state={SuccessAddTicketState} setState={setSuccessAddTicketState} text='درخواست ریفاند شما با موفقیت ثبت شد.' />

            <AddRefundModalStyle>
                <Dialog open={state} keepMounted onClose={handleClose} disablePortal>
                    <div className='modalBox'>
                        <h2>درخواست ریفاند</h2>
                        <div className='formBox'>
                            <TextArea
                                label='پیام خود را بنویسید'
                                type='text'
                                rows={5}
                                valuehandler={changeHandeler}
                                name='description'
                                value={formData.description}
                            />
                        </div>
                        <div className='btnBox'>
                            <CustomButton
                                clickHandeler={addRefundHandeler}
                                className='btn'
                                text='ثبت تیکت'
                                variant='text'
                                background='garadient'
                                radius='normal'
                                fontcolor='white'
                            />

                            <CustomButton
                                clickHandeler={handleClose}
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
            </AddRefundModalStyle>
        </>
    );
};

export default AddRefundModal;
