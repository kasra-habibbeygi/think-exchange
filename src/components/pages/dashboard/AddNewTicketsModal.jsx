/* eslint-disable react/prop-types */
import React from 'react';

//style
import { AddNewTicketsModalStyle } from './AddNewTicketsModal.style';

//mui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import TextaAria from '../../form-group/TextaAria';
import CustomButton from '../../form-group/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const AddNewTicketsModal = ({ state, setState }) => {
    const handleClose = () => {
        setState(false);
    };

    return (
        <AddNewTicketsModalStyle>
            <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={handleClose} disablePortal>
                <div className='modalBox'>
                    <h2>ثبت تیکت جدید</h2>
                    <div className='formBox'>
                        <CustomInput label='عنوان تیکت' type='text' />
                        <TextaAria label='پیام خود را بنویسید' type='text' rows={5} />
                    </div>
                    <div className='btnBox'>
                        <CustomButton
                            onClick={handleClose}
                            className='btn'
                            text='ثبت تیکت'
                            variant='text'
                            background='garadient'
                            radius='normal'
                            fontcolor='white'
                        />

                        <CustomButton
                            onClick={handleClose}
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
    );
};

export default AddNewTicketsModal;
