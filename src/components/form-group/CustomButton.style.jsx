/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const CustomButtonStyle = styled.div(props => ({
    textAlign: 'left',
    button: {
        background:
            props.background === 'error'
                ? `${props.theme.colors.error}`
                : props.background === 'warning'
                ? `${props.theme.colors.warning}`
                : props.background === 'success'
                ? `${props.theme.colors.success}`
                : props.background === 'white'
                ? `${props.theme.colors.white}`
                : props.background === 'garadient'
                ? `${props.theme.garadient}`
                : '',
        color:
            props.fontcolor === 'white'
                ? `${props.theme.colors.white}`
                : props.fontcolor === 'black'
                ? `${props.theme.colors.black}`
                : props.fontcolor === 'error'
                ? `${props.theme.colors.error}`
                : '',
        borderRadius: props.radius === 'normal' ? '12px' : props.radius === 'rounded' ? '20px' : '0px',
        padding: '10px 30px',

        '&:hover': {
            color: props.theme.colors.black
        }
    }
}));