/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SliderCardStyle = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: '170px',
    padding: '20px',

    '& .currencyName': {
        display: 'flex',
        justifyContent: 'space-between',

        img: {
            width: '32px',
            height: '32px'
        },

        '& .nameBox': {
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',

            '& p:first-of-type': {
                color: '#727A89',
                marginBottom: '-8px'
            }
        }
    },

    '& .price': {
        display: 'flex',
        justifyContent: 'space-between',
        color: !props.status ? props.theme.colors.success : props.status ? props.theme.colors.error : '#727A89',
        alignItems: 'flex-end',

        button: {
            marginBottom: '5px',
            padding: '10px 35px'
        },

        '& .priceBox': {
            direction: 'ltr'
        },

        h3: {
            fontSize: '1.8rem'
        },

        '& .percentage': {
            display: 'flex',
            alignItems: 'center',
            img: {
                width: '8px',
                marginRight: '5px'
            }
        }
    },

    '@media screen and (max-width: 450px)': {
        height: '150px',

        '& .nameBox': {
            fontSize: '.9rem'
        },
        h3: {
            fontSize: '1.5rem !important'
        },

        '& .percentage': {
            fontSize: '.9rem',
            img: {
                width: '6px !important'
            }
        },
        '& .price': {
            button: {
                fontSize: '.9rem',
                padding: '7px 20px'
            }
        }
    }
}));
