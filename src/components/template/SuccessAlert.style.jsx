/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SuccessAlertStyle = styled.div(props => ({
    '& .MuiPaper-root': {
        borderRadius: '20px',
        width: '700px'
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
        p: {
            fontSize: '.8rem',
            marginBottom: '20px',
            lineHeight: '30px'
        },

        img: {
            width: '100px'
        },
        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        },
        '& .modalBox': {
            button: {
                fontSize: '.8rem',
                padding: '5px 20px'
            }
        },
        button: {
            fontSize: '.8rem'
        }
    }
}));
