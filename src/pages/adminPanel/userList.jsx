/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import Pagination from '../../components/template/pagination';

//Assets
import { MainField } from '../../assets/styles/adminPanel/userList.style';

//APIs
import { GetAllUsers } from '../../api-requests/admin/user';

// MUI
import { TableCell, TableRow } from '@mui/material';

const TableHeader = ['ردیف', 'نام کاربر', 'ایمیل', 'شماره ثابت', 'شماره موبایل', 'کد ملی', 'تاریخ ساخت', 'تاریخ بروز رسانی'];

const UserList = () => {
    const [usersList, setUsersList] = useState([]);
    const [pageState, setPageState] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        GetAllUsers(pageState.current).then(res => {
            setUsersList(res.data.data);
            setPageState({
                ...pageState,
                total: res.data.last_page
            });
        });
    }, [pageState.current]);

    return (
        <MainField>
            <div className='header'>
                <h2>لیست کاربران</h2>
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
                <Pagination pageState={pageState} setPageState={setPageState} />
            </div>
        </MainField>
    );
};

export default UserList;
