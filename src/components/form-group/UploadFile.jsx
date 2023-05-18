/* eslint-disable react/prop-types */
import React from 'react';

//style
import { UploadFileStyle } from './UploadFile.style';
import UploadImage from '../../assets/images/ordering/Vector (1).png';

//mui
import IconButton from '@mui/material/IconButton';

const UploadFile = ({ name, valueHandler, fileName }) => {
    return (
        <UploadFileStyle>
            <IconButton color='primary' component='label' className='upload' onChange={e => valueHandler(e)}>
                <input hidden accept='image/*' type='file' name={name} />
                <img alt='uplpload file' src={UploadImage} />
                <p>{fileName ?? 'فایل را بکشید یا کلیک کنید'}</p>
            </IconButton>
        </UploadFileStyle>
    );
};

export default UploadFile;
