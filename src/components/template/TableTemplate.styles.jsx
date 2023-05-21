/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const TableTemplateStyles = styled.div(props => ({
    width: '100%',

    '& .MuiPaper-root': {
        boxShadow: 'none'
    },

    table: {
        minWidth: 'auto',

        tr: {
            '&:nth-of-type(2n-1)': {
                background: props.theme.colors.gray
            }
        },

        th: {
            border: 'none',
            textAlign: 'center',
            color: '#727A89',

            '&:first-of-type': {
                textAlign: 'right'
            }
        },

        td: {
            border: 'none',
            padding: '10px',
            textAlign: 'center',

            '&:first-of-type': {
                borderRadius: '0px 12px 12px 0px',
                textAlign: 'right'
            },

            '&:last-of-type': {
                borderRadius: '12px 0px 0px 12px'
            },

            div: {
                textAlign: 'center'
            }
        },

        button: {
            padding: '0px 17px'
        },

        '& .css-11pdr18 ': {
            textAlign: 'center'
        },
        '& .css-17o6ocu': {
            textAlign: 'center'
        }
    },
    '@media screen and (max-width: 450px)': {
        th: {
            fontSize: '.8rem'
        },

        td: {
            fontSize: '.8rem',
            button: {
                padding: '0px 12px',
                fontSize: '.8rem'
            }
        }
    }
}));
