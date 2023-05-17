/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

//styles
import upArrow from '../../../assets/images/dashboard/Vector.png';
import DownArrow from '../../../assets/images/dashboard/Vector-red.png';

import { SliderCardStyle } from './SliderCard.style';

//components
import CustomButton from '../../form-group/CustomButton';

const SliderCard = ({ data }) => {
    return (
        <SliderCardStyle status={data.change_rate.includes('-')}>
            <div className='currencyName'>
                <div className='nameBox'>
                    <p>{data.iso_name}</p>
                    <p>{data.name}</p>
                </div>
                <img alt='currency' src={data.logo} />
            </div>
            <div className='price'>
                <CustomButton text='فروش' variant='text' background='white' radius='normal' fontcolor='black' />

                <div className='priceBox'>
                    <div className='percentage'>
                        {!data.change_rate.includes('-') ? <img alt='currency' src={upArrow} /> : <img alt='currency' src={DownArrow} />}

                        {data.change_rate === '0' ? <span>0%</span> : <span>{data.change_rate}</span>}
                    </div>
                    <h3>{data.price}</h3>
                </div>
            </div>
        </SliderCardStyle>
    );
};

export default SliderCard;
