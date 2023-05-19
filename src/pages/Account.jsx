/* eslint-disable camelcase */
import React, { useState } from 'react';

//components
import AttachFile from '../components/pages/account/AttachFile';
import ChangePassword from '../components/pages/account/ChangePassword';
import PersonalInformation from '../components/pages/account/personalInformation';

//styles
import { AccountStyle } from '../assets/styles/account.style';
const Account = () => {
    const [formData, setFromData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        home_phone: '',
        national_code: '',
        password: '',
        password_confirmation: '',
        explain: '',
        nationalCartFile: ''
    });

    return (
        <AccountStyle>
            <PersonalInformation state={formData} setState={data => setFromData(data)} />
            <div className='rightBox'>
                <ChangePassword state={formData} setState={data => setFromData(data)} />
                <AttachFile state={formData} setState={data => setFromData(data)} />
            </div>
        </AccountStyle>
    );
};

export default Account;
