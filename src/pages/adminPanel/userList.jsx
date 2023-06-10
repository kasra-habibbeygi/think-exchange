/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import Pagination from '../../components/template/pagination';
import CustomButton from '../../components/form-group/CustomButton';

//Assets
import { MainField, ModalField } from '../../assets/styles/adminPanel/userList.style';

//APIs
import { GetAllUsers } from '../../api-requests/admin/user';

// MUI
import { Dialog, Slide, TableCell, TableRow } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const TableHeader = [
    'ردیف',
    'نام کاربر',
    'ایمیل',
    'شماره ثابت',
    'شماره موبایل',
    'کد ملی',
    'تاریخ ساخت',
    'تاریخ بروز رسانی',
    'عکس کارت ملی'
];

const UserList = () => {
    const [usersList, setUsersList] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [nationalCardPhoto, setNationalCardPhoto] = useState();
    const [pageState, setPageState] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        GetAllUsers(pageState.current).then(res => {
            setUsersList(res.data.data);
            setPageState({
                ...pageState,
                total: res.data.total
            });
        });
    }, [pageState.current]);

    const modalStatusHandler = img => {
        setNationalCardPhoto(img);
        setModalStatus(true);
    };

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
                            <TableCell>{item.created}</TableCell>
                            <TableCell>{item.updated}</TableCell>
                            <TableCell>
                                <CustomButton
                                    clickHandeler={() => modalStatusHandler(item.national_card_photo)}
                                    className='btn'
                                    text='مشاهده'
                                    variant='text'
                                    background='warning'
                                    radius='normal'
                                    fontcolor='white'
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableTemplate>
                <Pagination pageState={pageState} setPageState={setPageState} />
            </div>
            <ModalField>
                <Dialog open={modalStatus} TransitionComponent={Transition} keepMounted onClose={() => setModalStatus(false)} disablePortal>
                    {nationalCardPhoto ? (
                        <img src={`${process.env.REACT_APP_FILE_URL}${nationalCardPhoto}`} alt='' />
                    ) : (
                        <div className='empty_field'>عکس کارت ملی این کاربر هنوز بارگذاری نشده است !</div>
                    )}
                </Dialog>
            </ModalField>
        </MainField>
    );
};

export default UserList;
