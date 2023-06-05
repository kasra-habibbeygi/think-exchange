/* eslint-disable react/prop-types */
import React from 'react';

//components
import SliderCard from './SliderCard';

//styles
import { LatestCurrencyStatusStyle } from './LatestCurrencyStatus.style';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LatestCurrencyStatus = ({ currency }) => {
    const max = currency?.reduce(function (prev, current) {
        return prev.updated_at > current.updated_at ? prev : current;
    });

    return (
        <LatestCurrencyStatusStyle>
            <header>
                <h2>آخرین وضعیت ارزها</h2>
                <span>
                    {new Date(max?.updated_at?.split('T')[0]).toLocaleDateString('fa-IR')} - {max?.updated_at?.split('T')[1].split('.')[0]}
                </span>
            </header>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                className='mySwiper'
            >
                {currency?.map(item => (
                    <SwiperSlide className='Slide' key={item.id}>
                        <SliderCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </LatestCurrencyStatusStyle>
    );
};

export default LatestCurrencyStatus;
