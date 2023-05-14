import React from 'react';

//components
import AttachFile from '../components/pages/account/AttachFile';
import ChangePassword from '../components/pages/account/ChangePassword';
import PersonalInformation from '../components/pages/account/personalInformation';
import LayoutProvider from '../components/layouts/LayoutProvider';

//styles
import { AccountStyle } from '../assets/styles/account.style';

const Account = () => {
    return (
        <LayoutProvider>
            <AccountStyle>
                <PersonalInformation />
                <div className='rightBox'>
                    <ChangePassword />
                    <AttachFile />
                </div>
            </AccountStyle>
        </LayoutProvider>
    );
};

export default Account;
