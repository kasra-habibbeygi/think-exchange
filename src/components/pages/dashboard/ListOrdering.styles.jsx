/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const ListOrderingStyle = styled.div(props => ({
    width: '55%',
    minHeight: '400px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h2: {
        fontSize: '1.2rem'
    },

    a: {
        button: {
            marginTop: '30px',
            padding: '8px 40px',
            '&:hover': {
                color: props.theme.colors.white
            }
        }
    },

    '@media screen and (max-width: 1350px)': {
        width: '49%'
    },

    '@media screen and (max-width: 1210px)': {
        width: '100%',
        minHeight: 'auto'
    },
    '@media screen and (max-width: 450px)': {
        padding: '20px 20px',

        h2: {
            fontSize: '1rem'
        },

        th: {
            fontSize: '.8rem'
        },

        td: {
            fontSize: '.8rem',
            button: {
                padding: '0px 12px',
                fontSize: '.8rem'
            }
        },

        a: {
            marginTop: '20px',
            button: {
                padding: '5px 20px',
                fontSize: '.8rem',
                marginTop: '0px'
            }
        }
    }
}));
