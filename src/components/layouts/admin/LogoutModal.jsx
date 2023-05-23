/* eslint-disable react/prop-types */
import React from 'react';
import { AdminLoginStatusHandler } from '../../../state-manager/reducer/adminInfo';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('adminToken');
        dispatch(AdminLoginStatusHandler(false));
        navigate('/admin-panel/login');
    };

    return (
        <LogoutModalStyle>
            <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={() => setState(false)} disablePortal>
                <div className='modalBox'>
                    <h2>آیا میخواهید خارج شوید؟</h2>
                    <div className='btnBox'>
                        <Button onClick={logoutHandler}>بله</Button>
                        <Button onClick={() => setState(false)}>خیر</Button>
                    </div>
                </div>
            </Dialog>
        </LogoutModalStyle>
    );
};

export default LogoutModal;
