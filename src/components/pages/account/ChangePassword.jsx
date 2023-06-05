/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

//style
import { ChangePasswordStyle } from './ChangePassword.style';

//components
import CustomInput from '../../form-group/CustomInput.jsx';
import CustomButton from '../../form-group/CustomButton';

//api
import { PutUserProfile } from '../../../api-requests/profile';

const ChangePassword = ({ state, setState }) => {
    const [loader, setLoader] = useState(false);

    const validatFrom = () => {
        if (state.password === '') {
            toast.error('پسورد را وارد کنید');
            return false;
        } else if (state.password_confirmation === '') {
            toast.error('تکرار پسورد را وارد کنید');
            return false;
        } else if (state.password?.length < 8) {
            toast.error('پسورد باید حداقل 8 کارکتر باشد');
            return false;
        } else if (state.password_confirmation !== state.password) {
            toast.error('تکرار پسورد و پسورد با هم برابر نیست');
            return false;
        }
        return true;
    };
    const inputValueHandler = () => {
        if (validatFrom()) {
            setLoader(true);
            PutUserProfile({
                password: state.password,
                password_confirmation: state.password_confirmation
            })
                .then(() => {
                    toast.success('پسورد شما با موفقیت تغییر کرد');
                })
                .finally(() => {
                    setLoader(false);
                });
        }
    };

    return (
        <ChangePasswordStyle>
            <h2>تغییر کلمه عبور</h2>
            <CustomInput
                label='کلمه عبور جدید'
                type='password'
                id='outlined-basic'
                name='password'
                value={state.password}
                valuehandler={e => setState({ ...state, password: e.target.value })}
            />
            <CustomInput
                label='تکرار کلمه عبور جدید'
                type='password'
                id='outlined-basic'
                name='password_confirmation'
                value={state.password_confirmation}
                valuehandler={e => setState({ ...state, password_confirmation: e.target.value })}
            />
            <CustomButton
                clickHandeler={inputValueHandler}
                className='btn'
                text='ثبت '
                variant='text'
                background='garadient'
                radius='normal'
                fontcolor='white'
                loader={loader}
            />
        </ChangePasswordStyle>
    );
};

export default ChangePassword;
