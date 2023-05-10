/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const CustomInputStyle = styled.div(props => ({
    width: '100%',
    '& .MuiInputBase-root': {
        borderRadius: '20px'
    },

    '& .MuiFormControl-root': {
        width: '100%',
        marginBottom: '30px'
    },

    label: {
        right: '25px',
        top: '-5px',
        width: 'max-content',
        padding: '0px 15px'
    },

    input: {
        minHeight: '20px !important',
        padding: '13px'
    },

    legend: {
        display: 'none'
    },

    '& .Mui-focused': {
        color: props.theme.colors.blue,
        fontFamily: 'main !important'
    }
}));
