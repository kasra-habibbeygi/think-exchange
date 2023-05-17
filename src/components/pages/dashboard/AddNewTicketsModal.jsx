/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import validator from 'validator';

//style
import { AddNewTicketsModalStyle } from './AddNewTicketsModal.style';

//mui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';
import CustomButton from '../../form-group/CustomButton';
import SuccessAlert from '../../template/SuccessAlert';

//api
import { PostNewTickets } from '../../../api-requests/ticket';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const AddNewTicketsModal = ({ state, setState }) => {
    const [SuccessAddTicketState, setSuccessAddTicketState] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        attachment: ''
    });

    const validatFrom = () => {
        if (validator.isEmpty(formData.title)) {
            toast.error('عنوان پیام  خود را وارد کنید');
            return false;
        } else if (validator.isEmpty(formData.text)) {
            toast.error('متن پیام خود را وارد کنید');
            return false;
        }
        return true;
    };

    const changeHandeler = e => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleClose = () => {
        setState(false);
    };

    const addTicketsHandeler = () => {
        console.log(1);
        if (validatFrom()) {
            console.log(2);
            PostNewTickets(formData).then(() => {
                console.log(3);
                setState(false);
                setSuccessAddTicketState(true);
            });
        }
    };

    return (
        <>
            <AddNewTicketsModalStyle>
                <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={handleClose} disablePortal>
                    <div className='modalBox'>
                        <h2>ثبت تیکت جدید</h2>
                        <div className='formBox'>
                            <CustomInput label='عنوان تیکت' type='text' valuehandler={changeHandeler} name='title' value={formData.title} />
                            <TextaAria
                                label='پیام خود را بنویسید'
                                type='text'
                                rows={5}
                                valuehandler={changeHandeler}
                                name='text'
                                value={formData.title}
                            />
                        </div>
                        <div className='btnBox'>
                            <CustomButton
                                clickHandeler={addTicketsHandeler}
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
            </AddNewTicketsModalStyle>
            <SuccessAlert state={SuccessAddTicketState} setState={setSuccessAddTicketState} text='تیکت شما با موفقیت ثبت شد.' />
        </>
    );
};

export default AddNewTicketsModal;
