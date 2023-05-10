/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const ChangePasswordStyle = styled.div(props => ({
    width: '100%',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },

    button: {
        width: '100%'
    },

    '& .formBox': {
        width: '100%',
        display: 'flex',
        gap: '20px'
    }
}));
