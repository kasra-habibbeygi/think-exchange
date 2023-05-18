import React, { useEffect, useState } from 'react';

//Components
import TableTemplate from '../../components/template/TableTemplate';
import CustomButton from '../../components/form-group/CustomButton';

//Assets
import { MainField } from '../../assets/styles/adminPanel/curenciesList.style';
import upArrow from '../../assets/images/dashboard/Vector.png';
import DownArrow from '../../assets/images/dashboard/Vector-red.png';

//APIs
import { GetAllCurrencies } from '../../api-requests/currencies';

// MUI
import { TableCell, TableRow } from '@mui/material';

// Tools
import Tools from '../../utils/tools';

const TableHeader = ['ردیف', 'نام ارز', 'قیمت', 'درصد نوسان', 'تاریخ ایجاد', 'تاریخ بروز رسانی', 'تنظیمات'];

const CurenciesList = () => {
    const [curenciesList, setCurenciesList] = useState([]);

    useEffect(() => {
        GetAllCurrencies()
            .then(res => {
                setCurenciesList(res.data);
            })
            .catch(() => {});
    }, []);

    return (
        <MainField>
            <div className='header'>
                <h2>لیست ارز های سایت</h2>
                <CustomButton text='مشاهده پاسخ' variant='text' background='garadient' radius='normal' fontcolor='white' />
            </div>
            <TableTemplate TableHeader={TableHeader}>
                {curenciesList?.map((item, index) => (
                    <TableRow key={item.id}>
                        <TableCell scope='row'>{index + 1}</TableCell>
                        <TableCell>
                            <div className='curency_name'>
                                <img src={`https://thinkexchange.net/service/public/storage/${item.logo}`} alt='' />
                                {item.name} - {item.name}
                            </div>
                        </TableCell>
                        <TableCell>{Tools.addCommaInNumbers(item.price)}</TableCell>
                        <TableCell>
                            <div className='percentage'>
                                {!item.change_rate.includes('-') ? (
                                    <img alt='currency' src={upArrow} />
                                ) : (
                                    <img alt='currency' src={DownArrow} />
                                )}
                                {item.change_rate === '0' ? <span>0%</span> : <span>{item.change_rate}</span>}
                            </div>
                        </TableCell>
                        <TableCell>
                            {item.created_at.split('T')[0]} - {item.created_at.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell>
                            {item.updated_at.split('T')[0]} - {item.updated_at.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell>
                            <CustomButton
                                text='مشاهده پاسخ'
                                variant='text'
                                background='error'
                                radius='normal'
                                fontcolor='white'
                                extraClass='table_button'
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableTemplate>
        </MainField>
    );
};

export default CurenciesList;
