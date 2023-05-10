/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const CompleteOrderInformationStyle = styled.div(props => ({
    width: '73%',
    minHeight: '400px',
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

    '& .formBox': {
        width: '100%',
        display: 'flex',
        gap: '20px'
    },

    button: {
        '&:hover': {
            color: props.theme.colors.white
        }
    }
}));
