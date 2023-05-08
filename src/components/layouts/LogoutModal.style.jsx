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

            '&:last-child': {
                background: props.theme.colors.error
            }
        }
    }
}));
