/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SelectOrderTypeStyle = styled.div(props => ({
    width: '49%',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px 40px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0px',
    height: '180px',

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },

    '& .container': {
        display: 'flex',

        gap: '10px'
    },

    '@media screen and (max-width: 1210px)': {
        width: '100%',
        marginBottom: '20px'
    },
    '@media screen and (max-width: 620px)': {
        '& .container': {
            flexDirection: 'column',
            gap: '30px'
        }
    },
    '@media screen and (max-width: 450px)': {
        fontSize: '.8re',
        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        }
    }
}));
