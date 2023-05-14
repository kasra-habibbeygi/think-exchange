/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const LoginStyle = styled.div(props => ({
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
        justifyContent: 'space-between',
        alignItems: 'center',
        background: props.theme.colors.white,
        padding: '5px',
        borderRadius: '12px',
        width: '350px',
        marginBottom: '20px',
        button: {
            width: '165px'
        }
    },

    '& .login': {
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
        form: {
            width: '100%'
        },
        button: {
            width: '100%'
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
    }
}));
