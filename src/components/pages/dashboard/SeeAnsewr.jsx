/* eslint-disable react/prop-types */
import React from 'react';

//style
import { SeeAnsewrStyle } from './SeeAnsewr.style';

//mui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../../form-group/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const AddNewTicketsModal = ({ state, setState, ansewr }) => {
    const handleClose = () => {
        setState(false);
    };
    return (
        <SeeAnsewrStyle>
            <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={handleClose} disablePortal>
                <div className='modalBox'>
                    <h2>پاسخ تیکت </h2>
                    <div className='formBox'>
                        <p className='title'>
                            {ansewr.title}
                            <span>عنوان تیکت</span>
                        </p>
                        <p className='title'>
                            {ansewr.ansewr}
                            <span>متن پاسخ</span>
                        </p>
                    </div>
                    <div className='btnBox'>
                        <CustomButton
                            clickHandeler={handleClose}
                            className='close'
                            text='بازگشت'
                            variant='text'
                            background='error'
                            radius='normal'
                            fontcolor='white'
                        />
                    </div>
                </div>
            </Dialog>
        </SeeAnsewrStyle>
    );
};

export default AddNewTicketsModal;
