/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SeeAnsewrStyle = styled.div(props => ({
    '& .MuiPaper-root': {
        borderRadius: '20px',
        maxWidth: '700px',
        width: '450px'
    },

    '& .formBox': {
        width: '100%',

        p: {
            border: '1px solid #bdbdbd',
            borderRadius: '12px',
            padding: '20px 25px 15px',
            marginBottom: '30px',
            position: 'relative',

            span: {
                position: 'absolute',
                top: '-9px',
                right: '20px',
                background: ' white',
                padding: '0px 10px',
                fontSize: '0.85rem'
            }
        }
    },

    '& .btnBox': {
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
        color: props.theme.colors.black,

        button: {
            textAlign: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            width: '100%'
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
            fontSize: '.8rem'
        },
        '& .formBox': {
            p: {
                marginBottom: '20px'
            }
        }
    }
}));
