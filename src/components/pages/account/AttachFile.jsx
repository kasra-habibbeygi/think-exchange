/* eslint-disable react/prop-types */
import React from 'react';
import { toast } from 'react-hot-toast';

//style
import { AttachFileStyle } from './AttachFile.style';

//components
import UploadFile from '../../form-group/UploadFile';

const AttachFile = ({ state, setState }) => {
    const inputValueHandler = e => {
        setState({
            ...state,
            [e.target.name]: e.target.files[0]
        });
        toast.success('فایل با موفیت بارگزاری شد');
    };
    return (
        <AttachFileStyle>
            <h2>عکس کارت ملی</h2>
            <UploadFile name='attachment' valueHandler={inputValueHandler} fileName={state?.attachment?.name} />
        </AttachFileStyle>
    );
};

export default AttachFile;
