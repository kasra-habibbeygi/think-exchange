/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AttachFileStyle = styled.div(props => ({
    width: '25%',
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

    '& .upload': {
        color: '#727A89',
        display: 'flex',
        flexDirection: 'column',
        background: props.theme.colors.gray,
        borderRadius: '20px',
        padding: '40px 15px',

        p: {
            fontSize: '1rem',
            marginTop: '20px'
        }
    }
}));
