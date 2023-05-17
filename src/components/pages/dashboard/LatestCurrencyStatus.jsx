import React, { useEffect, useState } from 'react';

//components
import SliderCard from './SliderCard';

//styles
import { LatestCurrencyStatusStyle } from './LatestCurrencyStatus.style';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

//api
import { GetAllCurrencies } from '../../../api-requests/currencies';

const LatestCurrencyStatus = () => {
    const [getCorrency, setGetCorrency] = useState([]);

    useEffect(() => {
        GetAllCurrencies().then(res => {
            setGetCorrency(res.data);
        });
    }, []);

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
                {getCorrency.length ? (
                    getCorrency.map(item => (
                        <SwiperSlide className='Slide' key={item.id}>
                            <SliderCard data={item} />
                        </SwiperSlide>
                    ))
                ) : (
                    <h1>Lodaing...</h1>
                )}
            </Swiper>
        </LatestCurrencyStatusStyle>
    );
};

export default LatestCurrencyStatus;
