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
            '& p:first-of-type': {
                color: '#727A89',
                marginBottom: '-8px'
            }
        }
    },

    '& .price': {
        display: 'flex',
        justifyContent: 'space-between',
        color: props.status === 'up' ? props.theme.colors.success : props.status === 'down' ? props.theme.colors.error : '#727A89',
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
    }
}));
