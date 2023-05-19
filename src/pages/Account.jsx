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
    const [staticData, setStaticData] = useState({
        email: ''
    });
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
                setGetData({
                    first_name: res.data.user.first_name ?? '',
                    last_name: res.data.user.last_name ?? '',
                    email: res.data.user.email ?? '',
                    phone: res.data.user.phone ?? '',
                    home_phone: res.data.user.home_phone ?? '',
                    national_code: res.data.user.national_code ?? '',
                    password: res.data.user.password ?? '',
                    password_confirmation: res.data.user.password_confirmation ?? '',
                    explain: res.data.user.explain ?? '',
                    nationalCartFile: res.data.user.nationalCartFile ?? ''
                });
                setStaticData({
                    email: res.data.user.email ?? ''
                });
            })
            .catch(() => {});
    }, []);

    return (
        <AccountStyle>
            <PersonalInformation state={getData} setState={data => setGetData(data)} staticData={staticData} />
            <div className='rightBox'>
                <ChangePassword state={getData} setState={data => setGetData(data)} />
                <AttachFile state={getData} setState={data => setGetData(data)} />
            </div>
        </AccountStyle>
    );
};

export default Account;
