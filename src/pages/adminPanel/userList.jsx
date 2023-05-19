/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';

//Assets
import { MainField } from '../../assets/styles/adminPanel/userList.style';

//APIs
import { GetAllUsers } from '../../api-requests/admin/user';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'نام کاربر', 'ایمیل', 'شماره ثابت', 'شماره موبایل', 'کد ملی', 'تاریخ ساخت', 'تاریخ بروز رسانی'];

const UserList = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        GetAllUsers()
            .then(res => {
                setUsersList(res.data);
            })
            .catch(() => {});
    }, []);

    console.log(usersList);

    return (
        <MainField>
            <div className='header'>
                <h2>لیست کاربران</h2>
                {/* <CustomButton text='مشاهده پاسخ' variant='text' background='garadient' radius='normal' fontcolor='white' /> */}
            </div>
            <div className='table_field'>
                <TableTemplate TableHeader={TableHeader}>
                    {usersList?.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell scope='row'>{index + 1}</TableCell>
                            <TableCell>
                                {item.first_name} {item.last_name}
                            </TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.home_phone ?? '---'}</TableCell>
                            <TableCell>{item.phone ?? '---'}</TableCell>
                            <TableCell>{item.national_code ?? '---'}</TableCell>
                            <TableCell>
                                {item.created_at.split('T')[0]} - {item.created_at.split('T')[1].split('.')[0]}
                            </TableCell>
                            <TableCell>
                                {item.updated_at.split('T')[0]} - {item.updated_at.split('T')[1].split('.')[0]}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
            </div>
        </MainField>
    );
};

export default UserList;
