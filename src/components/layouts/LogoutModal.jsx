/* eslint-disable react/prop-types */
import React from 'react';

//style
import { LogoutModalStyle } from './LogoutModal.style';

//mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const LogoutModal = ({ state, setState }) => {
    const handleClose = () => {
        setState(false);
    };
    return (
        <LogoutModalStyle>
            <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={handleClose} disablePortal>
                <div className='modalBox'>
                    <h2>آیا میخواهید خارج شوید؟</h2>
                    <div className='btnBox'>
                        <Button onClick={handleClose}>بله</Button>
                        <Button onClick={handleClose}>خیر</Button>
                    </div>
                </div>
            </Dialog>
        </LogoutModalStyle>
    );
};

export default LogoutModal;
