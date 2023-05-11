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
        width: '30%',
        backgroundColor: props.theme.colors.gray,
        borderRadius: '28px'
    },

    '@media screen and (max-width: 1350px)': {
        ' & .swiper-slide': {
            width: '40%',
            marginRight: '20px',
            ':first-of-type': {
                marginRight: '0px'
            }
        },

        '& .currencyName': {
            img: {
                width: '40px',
                height: '40px'
            }
        }
    },
    '@media screen and (max-width: 1000px)': {
        ' & .swiper-slide': {
            width: '45%',
            marginRight: 'unset'
        }
    }
}));
