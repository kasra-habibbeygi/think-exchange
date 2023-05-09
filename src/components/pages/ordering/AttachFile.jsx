import React from 'react';

//style
import { AttachFileStyle } from './AttachFile.style';

//components
import UploadFile from '../../form-group/UploadFile';

const AttachFile = () => {
    return (
        <AttachFileStyle>
            <h2>بارگذاری فایل پیوست</h2>
            <UploadFile />
        </AttachFileStyle>
    );
};

export default AttachFile;
