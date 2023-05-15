/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const CompleteOrderInformationStyle = styled.div(props => ({
    width: '68%',
    minHeight: '400px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },

    '& .formBox': {
        width: '100%',
        display: 'flex',
        gap: '20px'
    },

    '@media screen and (max-width: 1350px)': {
        width: '63%'
    },
    '@media screen and (max-width: 1210px)': {
        width: '100%',
        marginBottom: '20px'
    },
    '@media screen and (max-width: 620px)': {
        '& .formBox': {
            flexDirection: 'column',
            gap: '0px'
        }
    },
    '@media screen and (max-width: 450px)': {
        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        },
        button: {
            marginTop: '0px'
        }
    }
}));
