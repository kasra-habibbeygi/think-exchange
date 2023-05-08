import React from 'react';

//components
import SliderCard from './SliderCard';

//styles
import { LatestCurrencyStatusStyle } from './LatestCurrencyStatus.style';
import corrency from '../../../assets/images/dashboard/EU.png';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LatestCurrencyStatus = () => {
    return (
        <LatestCurrencyStatusStyle>
            <h2>آخرین وضعیت ارزها</h2>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                pagination={{
                    clickable: true
                }}
                className='mySwiper'
            >
                <SwiperSlide className='Slide'>
                    <SliderCard image={corrency} status='down' />
                </SwiperSlide>
                <SwiperSlide className='Slide'>
                    <SliderCard image={corrency} status='up' />
                </SwiperSlide>
                <SwiperSlide className='Slide'>
                    <SliderCard image={corrency} status='normal' />
                </SwiperSlide>
                <SwiperSlide className='Slide'>
                    <SliderCard image={corrency} status='up' />
                </SwiperSlide>
                <SwiperSlide className='Slide'>
                    <SliderCard image={corrency} status='down' />
                </SwiperSlide>
                <SwiperSlide className='Slide'>
                    <SliderCard image={corrency} status='normal' />
                </SwiperSlide>
            </Swiper>
        </LatestCurrencyStatusStyle>
    );
};

export default LatestCurrencyStatus;
