/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

//style
import { AttachFileStyle } from './AttachFile.style';

//components
import UploadFile from '../../form-group/UploadFile';

// eslint-disable-next-line react/prop-types
const AttachFile = ({ setInputValues, inputValues }) => {
    const inputValueHandler = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.files[0]
        });
    };

    return (
        <AttachFileStyle>
            <h2>بارگذاری فایل پیوست</h2>
            <UploadFile name='attachment' valueHandler={inputValueHandler} fileName={inputValues?.attachment?.name} />
        </AttachFileStyle>
    );
};

export default AttachFile;
