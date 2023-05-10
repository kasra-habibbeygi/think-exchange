/* eslint-disable react/prop-types */
import React from 'react';

//style
import { SuccessOrderingStyle } from './SuccessOrdering.style';
import successLogo from '../../../assets/images/ordering/Success.png';

//mui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../../form-group/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const SuccessOrdering = ({ state, setState }) => {
    const handleClose = () => {
        setState(false);
    };

    return (
        <SuccessOrderingStyle>
            <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={handleClose} disablePortal>
                <div className='modalBox'>
                    <img src={successLogo} alt='success ordering' />
                    <p>
                        سفارش شما با موفقیت ثبت شد همکاران ما اطلاعات پرداختی را تا ۲۴ ساعت آینده برای شما ارسال خواهند کردلطفا از آنلاین
                        بودن خود در واتساپ مطمئن باشید .
                    </p>
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
        </SuccessOrderingStyle>
    );
};

export default SuccessOrdering;
