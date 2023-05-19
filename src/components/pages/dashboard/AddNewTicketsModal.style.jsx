/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AddNewTicketsModalStyle = styled.div(props => ({
    '& .MuiPaper-root': {
        borderRadius: '20px',
        Width: '700px'
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
        padding: '30px 40px',
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
    },
    '@media screen and (max-width: 992px)': {
        '& .MuiPaper-root': {
            maxWidth: '600px'
        }
    },
    '@media screen and (max-width: 730px)': {
        '& .MuiPaper-root': {
            maxWidth: '500px'
        },
        '& .modalBox': {
            padding: '20px'
        }
    },
    '@media screen and (max-width: 550px)': {
        '& .MuiPaper-root': {
            margin: '10px'
        }
    },
    '@media screen and (max-width: 450px)': {
        fontSize: '.8re',
        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        },
        '& .modalBox': {
            fontSize: '0.8rem'
        },
        button: {
            fontSize: '.8rem',
            padding: '5px 20px'
        },
        '& .formBox': {
            p: {
                marginBottom: '20px'
            }
        }
    }
}));
