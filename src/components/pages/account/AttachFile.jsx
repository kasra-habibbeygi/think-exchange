/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

//Assets
import { AttachFileStyle } from './AttachFile.style';

//Components
import UploadFile from '../../form-group/UploadFile';

const AttachFile = ({ state, isVerify, setState, img }) => {
    const inputValueHandler = e => {
        setState({
            ...state,
            national_card_photo: e.target.files[0]
        });
    };

    return (
        <AttachFileStyle>
            <h2>عکس کارت ملی</h2>
            {state.national_card_photo ? (
                <div className='national_img_field'>
                    <img alt='currency' src={`${process.env.REACT_APP_FILE_URL}${img}`} />
                </div>
            ) : (
                <UploadFile name='national_card_photo' valueHandler={inputValueHandler} fileName={state?.attachment?.name} />
            )}
        </AttachFileStyle>
    );
};

export default AttachFile;
