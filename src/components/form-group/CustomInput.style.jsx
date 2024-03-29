/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const CustomInputStyle = styled.div(props => ({
    width: '100%',

    '& .MuiInputBase-root': {
        borderRadius: '12px'
    },

    '& .MuiFormControl-root': {
        width: '100%',
        marginBottom: '30px'
    },

    label: {
        right: '20px',
        top: '-10px',
        width: 'max-content',
        padding: '0px 15px'
    },

    fieldset: {
        boxShadow: '0px 8px 24px rgba(112, 144, 176, 0.08)'
    },

    input: {
        padding: '8px'
    },

    textarea: {
        height: '120px !important'
    },

    legend: {
        display: 'none'
    },

    '& .Mui-focused': {
        color: props.theme.colors.blue,
        fontFamily: 'main !important'
    },

    '& .MuiInputLabel-shrink': {
        padding: '0px 10px 0px 10px',
        right: '10px'
    },

    '@media screen and (max-width: 450px)': {
        label: {
            fontSize: '.8rem'
        },
        input: {
            fontSize: '.8rem',
            padding: '8px 15px'
        },
        textarea: {
            fontSize: '.8rem'
        },
        '& .MuiInputLabel-shrink': {
            fontSize: '.9rem',
            right: '15px',
            top: '-7px'
        }
    }
}));
