/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const LatestCurrencyStatusStyle = styled.div(props => ({
    width: '100%',
    height: '300px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',

    h2: {
        fontSize: '1.2rem'
    },

    '& .mySwiper': {
        margin: '40px 0px',
        cursor: 'pointer'
    },

    ' &.swiper': {
        width: '100%',
        height: '100%'
    },

    ' & .swiper-slide ': {
        textAlign: 'center',
        fontSize: '18px',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    '& .swiper-slide img': {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },

    ' & .swiper-slide': {
        width: '28%',
        backgroundColor: props.theme.colors.gray,
        boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: '28px'
    }
}));
