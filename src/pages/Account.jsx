import React, { useState } from 'react';

//components
import AttachFile from '../components/pages/account/AttachFile';
import ChangePassword from '../components/pages/account/ChangePassword';
import PersonalInformation from '../components/pages/account/personalInformation';
import LayoutProvider from '../components/layouts/LayoutProvider';

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
        <LayoutProvider>
            <AccountStyle>
                <PersonalInformation state={formData} setState={data => setFromData(data)} />
                <div className='rightBox'>
                    <ChangePassword />
                    <AttachFile state={formData} setState={data => setFromData(data)} />
                </div>
            </AccountStyle>
        </LayoutProvider>
    );
};

export default Account;
