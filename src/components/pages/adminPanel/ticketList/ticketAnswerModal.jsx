/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

//Assets
import { ModalField } from './ticketAnswerModal.style';

//MUI
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//Component
import TextArea from '../../../form-group/TextArea';
import CustomButton from '../../../form-group/CustomButton';

// APIs
import { AnswerTicket, ChangeTicketStatus } from '../../../../api-requests/admin/ticket';
import { toast } from 'react-hot-toast';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const AnswerTicketModal = ({ status, setStatus, ticketId }) => {
    const [formData, setFormData] = useState({
        answer: ''
    });

    const changeHandeler = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addTicketsHandeler = () => {
        if (formData.answer === '') {
            toast.error('لطفا توضیحات پاسخ را پر کنید !');
        } else {
            AnswerTicket(ticketId, formData).then(() => {
                ChangeTicketStatus(ticketId, { is_verify: 1 });
            });
        }
    };

    return (
        <ModalField>
            <Dialog open={status} TransitionComponent={Transition} keepMounted onClose={() => setStatus(false)} disablePortal>
                <div className='modalBox'>
                    <h2>پاسخ تیکت</h2>
                    <div className='formBox'>
                        <TextArea
                            label='پیام خود را بنویسید'
                            type='text'
                            rows={5}
                            valuehandler={changeHandeler}
                            name='answer'
                            value={formData.answer}
                        />
                    </div>
                    <div className='btnBox'>
                        <CustomButton
                            clickHandeler={addTicketsHandeler}
                            className='btn'
                            text='ثبت جواب'
                            variant='text'
                            background='garadient'
                            radius='normal'
                            fontcolor='white'
                        />
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

export default AnswerTicketModal;
