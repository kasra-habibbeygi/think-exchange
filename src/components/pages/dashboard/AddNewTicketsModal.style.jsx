/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AddNewTicketsModalStyle = styled.div(props => ({
    '& .MuiPaper-root': {
        borderRadius: '20px',
        minWidth: '500px'
    },

    '& .btnBox': {
        display: 'flex',
        gap: '20px'
    },

    '& .formBox': {
        width: '100%'
    },

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
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
