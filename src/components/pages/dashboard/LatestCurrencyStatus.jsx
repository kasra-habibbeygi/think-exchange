/* eslint-disable react/prop-types */
import React from 'react';

//components
import SliderCard from './SliderCard';

//styles
import { LatestCurrencyStatusStyle } from './LatestCurrencyStatus.style';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LatestCurrencyStatus = ({ currencies }) => {
    console.log(currencies);
    return (
        <LatestCurrencyStatusStyle>
            <h2>آخرین وضعیت ارزها</h2>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                className='mySwiper'
            >
                {currencies?.map(item => (
                    <SwiperSlide className='Slide' key={item.id}>
                        <SliderCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </LatestCurrencyStatusStyle>
    );
};

export default LatestCurrencyStatus;
