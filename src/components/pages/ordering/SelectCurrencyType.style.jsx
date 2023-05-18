/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SelectCurrencyTypeStyle = styled.div(props => ({
    width: '49%',
    height: '180px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& .input_field': {
        display: 'flex',
        alignItems: 'center',

        '& .MuiFormControl-root': {
            margin: '0',

            '&:hover': {
                fieldset: {
                    borderColor: 'rgba(0, 0, 0, 0.23)'
                }
            }
        },

        fieldset: {
            borderRadius: '0 10px 10px 0'
        }
    },

    '& .select': {
        position: 'relative',
        top: '-2px',
        width: '150px',

        '& .MuiInputBase-root': {
            padding: '3px',
            paddingRight: '40px',
            paddingLeft: '5px',

            '&:hover': {
                fieldset: {
                    borderColor: 'rgba(0, 0, 0, 0.23)'
                }
            }
        },

        fieldset: {
            borderRadius: '10px 0 0 10px',
            borderRight: '0'
        }
    },

    h2: {
        fontSize: '1.2rem',
        marginTop: '10px'
    },

    '@media screen and (max-width: 1210px)': {
        width: '100%'
    }
}));
