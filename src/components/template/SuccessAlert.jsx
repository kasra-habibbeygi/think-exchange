/* eslint-disable react/prop-types */
import React from 'react';

//style
import { SuccessAlertStyle } from './SuccessAlert.style';
import successLogo from '../../assets/images/ordering/Success.png';

//mui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../form-group/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const SuccessAlert = ({ state, setState, text }) => {
    const handleClose = () => {
        setState(false);
    };

    return (
        <SuccessAlertStyle>
            <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={handleClose} disablePortal>
                <div className='modalBox'>
                    <img src={successLogo} alt='success ordering' />
                    <p>{text}</p>
                    <div className='btnBox'>
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
        </SuccessAlertStyle>
    );
};

export default SuccessAlert;
