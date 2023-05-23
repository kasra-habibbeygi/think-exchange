/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AttachFileStyle = styled.div(props => ({
    width: '100%',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',

    '& .is_verify_text': {
        color: '#727A89',
        display: 'flex',
        flexDirection: 'column',
        background: props.theme.colors.gray,
        borderRadius: '20px',
        padding: '40px 15px',
        textAlign: 'center'
    },

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
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
    },
    '@media screen and (max-width: 1210px)': {
        marginTop: '0px'
    },
    '@media screen and (max-width: 450px)': {
        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        }
    }
}));
