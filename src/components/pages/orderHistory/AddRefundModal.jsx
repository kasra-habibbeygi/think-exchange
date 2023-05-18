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

const AddRefundModal = ({ state, setState }) => {
    const [formData, setFormData] = useState({
        text: ''
    });
    const [SuccessAddTicketState, setSuccessAddTicketState] = useState(false);

    const handleClose = () => {
        setState(false);
    };

    const validatFrom = () => {
        if (validator.isEmpty(formData.text)) {
            toast.error('متن پیام خود را وارد کنید');
            return false;
        }
        return true;
    };

    const changeHandeler = e => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const addRefundHandeler = () => {
        if (validatFrom()) {
            setState(false);
            setSuccessAddTicketState(true);
        }
    };

    console.log(formData);
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
                                name='text'
                                value={formData.text}
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
