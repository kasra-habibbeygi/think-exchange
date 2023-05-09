/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const CustomSelectStyle = styled.div(props => ({
    width: '49%',
    textAlign: 'right',

    label: {
        right: '25px',
        top: '-5px',
        width: 'max-content'
    },

    input: {
        minHeight: '20px !important'
    },

    '& .MuiInputBase-root': {
        borderRadius: '20px',
        minWidth: '49%'
    },

    '& .Mui-focused': {
        color: props.theme.colors.blue,
        fontFamily: 'main !important',
        label: {
            padding: '0px 20px 0px 10px',
            margin: '0px',
            right: '10px'
        }
    },

    '& .MuiAutocomplete-endAdornment': {
        right: 'unset !important',
        left: '9px'
    },

    '& .MuiOutlinedInput-root': {
        padding: '5px 15px !important'
    },

    '& .MuiFormLabel-filled': {
        padding: '0px 10px !important',
        right: '10px'
    },

    legend: {
        display: 'none'
    },

    li: {
        fontFamily: 'main !important'
    }
}));
