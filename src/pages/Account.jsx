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
    const [isVerify, setIsVerify] = useState(0);
    const [staticData, setStaticData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        home_phone: '',
        national_code: '',
        explain: '',
        national_card_photo: ''
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
        national_card_photo: ''
    });

    useEffect(() => {
        GetUserDashboard().then(res => {
            setIsVerify(res.data.user.is_verified);
            setGetData({
                ...getData,
                first_name: res.data.user.first_name ?? '',
                last_name: res.data.user.last_name ?? '',
                email: res.data.user.email ?? '',
                phone: res.data.user.phone ?? '',
                home_phone: res.data.user.home_phone ?? '',
                national_code: res.data.user.national_code ?? '',
                explain: res.data.user.explain ?? '',
                national_card_photo: res.data.user.national_card_photo ?? ''
            });
            setStaticData({
                first_name: res.data.user.first_name ?? '',
                last_name: res.data.user.last_name ?? '',
                email: res.data.user.email ?? '',
                phone: res.data.user.phone ?? '',
                home_phone: res.data.user.home_phone ?? '',
                national_code: res.data.user.national_code ?? '',
                explain: res.data.user.explain ?? '',
                national_card_photo: res.data.user.national_card_photo ?? ''
            });
        });
    }, []);

    return (
        <AccountStyle>
            <PersonalInformation state={getData} setState={setGetData} staticData={staticData} isVerify={isVerify} />
            <div className='rightBox'>
                <ChangePassword state={getData} setState={setGetData} />
                <AttachFile state={getData} setState={setGetData} img={staticData.national_card_photo} />
            </div>
        </AccountStyle>
    );
};

export default Account;
