import React from 'react';

//components
import AttachFile from '../components/pages/account/AttachFile';
import ChangePassword from '../components/pages/account/ChangePassword';
import PersonalInformation from '../components/pages/account/personalInformation';

//styles
import { AccountStyle } from '../assets/styles/account.style';

const Account = () => {
    return (
        <AccountStyle>
            <PersonalInformation />
            <div className='rightBox'>
                <ChangePassword />
                <AttachFile />
            </div>
        </AccountStyle>
    );
};

export default Account;
