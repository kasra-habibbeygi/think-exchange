/* eslint-disable react/prop-types */
import React from 'react';

//style
import { UploadFileStyle } from './UploadFile.style';
import UploadImage from '../../assets/images/ordering/Vector (1).png';

//mui
import IconButton from '@mui/material/IconButton';
import { BeatLoader } from 'react-spinners';

const UploadFile = ({ name, valueHandler, fileName, loader = false }) => {
    return (
        <UploadFileStyle>
            <IconButton color='primary' component='label' className='upload' onChange={e => valueHandler(e)}>
                <input hidden accept='image/*' type='file' name={name} />
                <img alt='uplpload file' src={UploadImage} />
                {loader ? (
                    <BeatLoader color='#577CFF' size={10} style={{ height: '24px', display: 'flex', alignItems: 'center' }} />
                ) : (
                    <p>{fileName ?? 'فایل را بکشید یا کلیک کنید'}</p>
                )}
            </IconButton>
        </UploadFileStyle>
    );
};

export default UploadFile;
