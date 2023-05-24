/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const LatestCurrencyStatusStyle = styled.div(props => ({
    width: '100%',
    background: props.theme.colors.white,
    borderRadius: '28px',
    padding: '50px 30px 30px 0',

    h2: {
        fontSize: '1.2rem'
    },

    '& .mySwiper': {
        margin: '0 0px',
        cursor: 'pointer'
    },

    ' &.swiper': {
        width: '100%',
        height: '100%'
    },

    ' & .swiper-slide ': {
        textAlign: 'center',
        fontSize: '1.1rem',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '26px 10px',
        width: '30%'
    },

    '& .swiper-slide img': {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '40px',

        span: {
            color: '#727A89'
        }
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
    '@media screen and (max-width: 1200px)': {
        ' & .swiper-slide': {
            width: '45%',
            marginRight: 'unset'
        }
    },
    '@media screen and (max-width: 992px)': {
        ' & .swiper-slide': {
            width: '40%',
            marginRight: '20px'
        }
    },
    '@media screen and (max-width: 730px)': {
        ' & .swiper-slide': {
            width: '45%',
            marginRight: 'unset'
        }
    },
    '@media screen and (max-width: 620px)': {
        ' & .swiper-slide': {
            width: '70%',
            marginRight: '20px'
        }
    },
    '@media screen and (max-width: 450px)': {
        h2: {
            fontSize: '1rem'
        },
        padding: '20px 20px',
        fontSize: '.8rem',
        height: '250px',

        '& .mySwiper': {
            margin: '20px 0px'
        },
        ' & .swiper-slide': {
            width: '80%',
            marginRight: 'unset'
        }
    },
    '@media screen and (max-width: 350px)': {
        ' & .swiper-slide': {
            width: '90%',
            marginRight: 'unset'
        }
    }
}));
