/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

//style
import { AttachFileStyle } from './AttachFile.style';

//components
import UploadFile from '../../form-group/UploadFile';

//api
import { UploadFileAPI } from '../../../api-requests/profile';

const AttachFile = ({ state, isVerify }) => {
    const formData = new FormData();
    const [loader, setLoader] = useState(false);

    const inputValueHandler = e => {
        formData.append('national_card_photo', e.target.files[0]);
        formData.append('_method', 'PUT');
        setLoader(true);
        UploadFileAPI(formData)
            .then(() => {
                toast.success('فایل با موفیت بارگزاری شد');
            })
            .finally(() => {
                setLoader(false);
            });
    };

    return (
        <AttachFileStyle>
            <h2>عکس کارت ملی</h2>
            {isVerify ? (
                <p className='is_verify_text'>عکس کارت ملی شما تایید شده است</p>
            ) : (
                <UploadFile
                    name='national_card_photo'
                    valueHandler={inputValueHandler}
                    fileName={state?.attachment?.name}
                    loader={loader}
                />
            )}
        </AttachFileStyle>
    );
};

export default AttachFile;
