/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { toast } from 'react-hot-toast';

//style
import { AttachFileStyle } from './AttachFile.style';

//components
import UploadFile from '../../form-group/UploadFile';

//api
import { PutUserProfile } from '../../../api-requests/profile';

const AttachFile = ({ state, setState }) => {
    const formData = new FormData();
    const inputValueHandler = e => {
        formData.append('national_card_photo', e.target.file[0]);

        PutUserProfile(formData).then(() => {
            toast.success('فایل با موفیت بارگزاری شد');
        });
    };
    console.log(formData);
    return (
        <AttachFileStyle>
            <h2>عکس کارت ملی</h2>
            <UploadFile name='national_card_photo' valueHandler={inputValueHandler} fileName={state?.attachment?.name} />
        </AttachFileStyle>
    );
};

export default AttachFile;
