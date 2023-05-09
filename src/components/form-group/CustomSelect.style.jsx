/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const CustomSelectStyle = styled.div(props => ({
    width: '49%',
    textAlign: 'right',

    input: {
        minHeight: '20px !important'
        // textAlign: 'right',
        // direction: 'rtl'
    },

    '& .MuiInputBase-root': {
        borderRadius: '20px',
        minWidth: '49%'
    },

    '& .Mui-focused': {
        color: props.theme.colors.blue,
        fontFamily: 'main !important'
    },

    '& .MuiPopper-root': {
        fontFamily: 'main !important'
    }
}));
