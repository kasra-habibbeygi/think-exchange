/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

//components
import AttachFile from '../components/pages/account/AttachFile';
import ChangePassword from '../components/pages/account/ChangePassword';
import PersonalInformation from '../components/pages/account/personalInformation';

//styles
import { AccountStyle } from '../assets/styles/account.style';

//API
import { GetUserDashboard } from '../api-requests/user';

const Account = () => {
    const [getData, setGetData] = useState({
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

    useEffect(() => {
        GetUserDashboard()
            .then(res => {
                setGetData(res.data.user);
            })
            .catch(() => {});
    }, []);

    return (
        <AccountStyle>
            <PersonalInformation state={getData} setState={data => setGetData(data)} />
            <div className='rightBox'>
                <ChangePassword state={getData} setState={data => setGetData(data)} />
                <AttachFile state={getData} setState={data => setGetData(data)} />
            </div>
        </AccountStyle>
    );
};

export default Account;
