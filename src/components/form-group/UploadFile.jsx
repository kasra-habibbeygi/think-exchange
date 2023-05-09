import React from 'react';

//style
import { UploadFileStyle } from './UploadFile.style';
import UploadImage from '../../assets/images/ordering/Vector (1).png';

//mui
import IconButton from '@mui/material/IconButton';

const UploadFile = () => {
    return (
        <UploadFileStyle>
            <IconButton color='primary' aria-label='upload picture' component='label' className='upload'>
                <input hidden accept='image/*' type='file' />
                <img alt='uplpload file' src={UploadImage} />
                <p>فایل را بکشید یا کلیک کنید</p>
            </IconButton>
        </UploadFileStyle>
    );
};

export default UploadFile;
