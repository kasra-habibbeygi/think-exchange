/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AttachFileStyle = styled.div(props => ({
    width: '30%',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',

    h2: {
        fontSize: '1.2rem',
        marginBottom: '20px'
    },

    '@media screen and (max-width: 1350px)': {
        width: '35%'
    },
    '@media screen and (max-width: 1210px)': {
        width: '100%'
    },
    '@media screen and (max-width: 450px)': {
        h2: {
            fontSize: '1rem'
        }
    }
}));
