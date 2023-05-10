import React from 'react';

//components
import CustomButton from '../../form-group/CustomButton';

//styles
import { AddTicketsStyle } from './AddTickets.style';

//mui

const AddTickets = () => {
    return (
        <AddTicketsStyle>
            <h2>ثبت تیکت</h2>
            <div className='btnBox'>
                <CustomButton className='btn' text='ثبت تیکت' variant='text' background='garadient' radius='normal' fontcolor='white' />
                <CustomButton className='btn' text='بازگشت' variant='text' background='garadient' radius='normal' fontcolor='white' />
            </div>
        </AddTicketsStyle>
    );
};

export default AddTickets;
