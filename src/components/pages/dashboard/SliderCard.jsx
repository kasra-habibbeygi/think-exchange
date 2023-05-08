/* eslint-disable react/prop-types */
import React from 'react';

//styles
import upArrow from '../../../assets/images/dashboard/Vector.png';
import DownArrow from '../../../assets/images/dashboard/Vector-red.png';

import { SliderCardStyle } from './SliderCard.style';

//components
import CustomButton from '../../form-group/CustomButton';

const SliderCard = ({ image, status }) => {
    return (
        <SliderCardStyle status={status}>
            <div className='currencyName'>
                <div className='nameBox'>
                    <p>EUR</p>
                    <p>یورو</p>
                </div>
                <img alt='currency' src={image} />
            </div>
            <div className='price'>
                <CustomButton text='فروش' variant='text' background='white' radius='normal' fontcolor='black' />

                <div className='priceBox'>
                    <div className='percentage'>
                        {status === 'up' ? (
                            <img alt='currency' src={upArrow} />
                        ) : status === 'down' ? (
                            <img alt='currency' src={DownArrow} />
                        ) : (
                            ''
                        )}

                        {status === 'normal' ? <span>0%</span> : <span>4.04%</span>}
                    </div>
                    <h3>50.750</h3>
                </div>
            </div>
        </SliderCardStyle>
    );
};

export default SliderCard;
