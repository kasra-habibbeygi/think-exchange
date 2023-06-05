/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

//Assets
import { AttachFileStyle } from './AttachFile.style';

//Components
import UploadFile from '../../form-group/UploadFile';

const AttachFile = ({ state, setState, img }) => {
    const [changeStatus, setChangeStatus] = useState(false);
    const inputValueHandler = e => {
        setChangeStatus(true);
        setState({
            ...state,
            national_card_photo: e.target.files[0]
        });
    };

    const imgProvider = () => {
        if (img) {
            return (
                <div className='national_img_field'>
                    <img alt='currency' src={`${process.env.REACT_APP_FILE_URL}${img}`} />
                </div>
            );
        } else if (state.national_card_photo || changeStatus) {
            return (
                <div className='national_img_field'>
                    <img alt='currency' src={URL.createObjectURL(state.national_card_photo)} />
                </div>
            );
        }

        return <UploadFile name='national_card_photo' valueHandler={inputValueHandler} fileName={state?.attachment?.name} />;
    };

    return (
        <AttachFileStyle>
            <h2>عکس کارت ملی</h2>
            {imgProvider()}
        </AttachFileStyle>
    );
};

export default AttachFile;
