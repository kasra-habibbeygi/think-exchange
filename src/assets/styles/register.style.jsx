/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const RegisterStyle = styled.div(props => ({
    '& .imageBlur': {
        width: '100%',
        height: '100vh',
        background: ` url(${props.image}) no-repeat center`,
        backgroundSize: 'cover',
        filter: 'blur(9px) ',
        position: 'relative',
        top: '0px'
    },

    '& .container': {
        width: '100%',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    '& .changeBtn': {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        background: props.theme.colors.white,
        padding: '5px',
        borderRadius: '12px',
        width: '350px',
        marginBottom: '20px',
        a: {
            width: '100%'
        },
        button: {
            width: '100%'
        }
    },

    '& .register': {
        width: '500px',
        height: 'max-content',
        background: props.theme.colors.white,
        borderRadius: '28px',
        boxShadow: props.theme.boxShadow,
        padding: '20px 60px 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        img: {
            width: '70px',
            marginBottom: '20px'
        },

        h2: {
            marginBottom: '10px'
        },

        small: {
            color: '#727A89',
            marginBottom: '40px',
            fontSize: '.9rem'
        },

        button: {
            width: '100%'
        },

        '& .formGroup': {
            display: 'flex',
            gap: '5px'
        },

        '& .textGroup': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '40px',
            fontSize: '.85rem',

            p: {
                fontWeight: 'bold'
            },

            a: {
                color: props.theme.colors.blue
            }
        }
    },

    '& .sub_btn': {
        width: '100%',
        marginTop: '10px'
    },

    '& .MuiFormControlLabel-root': {
        marginRight: '0px'
    },

    '& .MuiFormGroup-root ': {
        marginBottom: '20px'
    },

    span: {
        fontFamily: 'main',
        fontSize: '.82rem'
    },

    '@media screen and (max-width: 730px)': {
        '& .changeBtn': {
            width: '350px',
            marginBottom: '20px',
            button: {
                fontSize: '.8rem',
                width: '100%',
                padding: '7px 0px !important'
            }
        },

        '& .MuiFormControl-root': {
            marginBottom: '20px !important'
        },

        '& .register': {
            padding: '20px',
            width: '400px',

            img: {
                width: '40px',
                marginBottom: '10px'
            },

            h2: {
                marginBottom: '10px',
                fontSize: '1rem'
            },

            small: {
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '.8rem'
            },

            '& .textGroup': {
                marginBottom: '20px'
            }
        }
    },
    '@media screen and (max-width: 450px)': {
        '& .changeBtn': {
            width: '300px'
        },

        '& .register': {
            width: '310px'
        }
    }
}));
