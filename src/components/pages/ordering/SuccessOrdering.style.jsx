/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SuccessOrderingStyle = styled.div(props => ({
    '& .MuiPaper-root': {
        borderRadius: '20px',
        minWidth: '500px'
    },

    p: {
        fontSize: '1.2rem',
        marginBottom: '40px',
        textAlign: 'center',
        lineHeight: '40px'
    },

    img: {
        width: '150px'
    },
    '& .modalBox': {
        padding: '40px 60px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'props.theme.colors.black',

        button: {
            textAlign: 'center',
            justifyContent: 'center',
            borderRadius: '10px'
        }
    }
}));
