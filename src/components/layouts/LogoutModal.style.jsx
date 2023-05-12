/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const LogoutModalStyle = styled.div(props => ({
    '& .MuiPaper-root': {
        borderRadius: '20px'
    },

    '& .modalBox': {
        padding: '40px 60px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'props.theme.colors.black',
        button: {
            color: props.theme.colors.white,
            textAlign: 'center',
            justifyContent: 'center',
            padding: '4px 0px',
            marginTop: '40px',
            borderRadius: '10px',

            '&:first-of-type': {
                background: props.theme.colors.success,
                marginLeft: '20px'
            },

            '&:last-of-type': {
                background: props.theme.colors.error
            }
        }
    },

    '@media screen and (max-width: 550px)': {
        h2: {
            fontSize: '1.2rem'
        }
    },
    '@media screen and (max-width: 450px)': {
        '& .modalBox': {
            padding: '20px 40px',
            h2: {
                fontSize: '1rem'
            },
            '& .btnBox': {
                button: {
                    marginTop: '20px',
                    fontSize: '0.8rem',
                    padding: '2px 0px'
                }
            }
        }
    }
}));
