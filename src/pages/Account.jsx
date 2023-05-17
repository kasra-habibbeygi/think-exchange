import React, { useState } from 'react';

//components
import AttachFile from '../components/pages/account/AttachFile';
import ChangePassword from '../components/pages/account/ChangePassword';
import PersonalInformation from '../components/pages/account/personalInformation';

//styles
import { AccountStyle } from '../assets/styles/account.style';
const Account = () => {
    const [formData, setFromData] = useState({
        name: '',
        family: '',
        email: '',
        phoneNumber: '',
        landline: '',
        nationalCode: '',
        explain: '',
        nationalCartFile: '',
        newPassword: '',
        confirmPassword: ''
    });
    return (
        <AccountStyle>
            <PersonalInformation state={formData} setState={data => setFromData(data)} />
            <div className='rightBox'>
                <ChangePassword />
                <AttachFile state={formData} setState={data => setFromData(data)} />
            </div>
        </AccountStyle>
    );
};

export default Account;
