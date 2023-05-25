/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AddTicketsStyle = styled.div(props => ({
    width: '43%',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '500px',
    height: 'max-content',

    '& .table_field': {
        overflow: 'auto',
        maxHeight: '500px',
        padding: '0 20px'
    },

    td: {
        div: {
            textAlign: 'center'
        }
    },

    h2: {
        fontSize: '1.2rem'
    },

    '& .circleBox': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& .circle': {
            borderRadius: '50%',
            width: '10px',
            height: '10px',
            background: props.theme.colors.error,
            marginLeft: '5px'
        }
    },

    '& .btn': {
        marginTop: '30px',

        button: {
            padding: '8px 40px',
            minHeight: '45px',

            '&:hover': {
                color: props.theme.colors.white
            }
        }
    },

    '@media screen and (max-width: 1350px)': {
        width: '49%'
    },

    '@media screen and (max-width: 1210px)': {
        width: '100%',
        marginBottom: '20px',
        minHeight: 'auto'
    },
    '@media screen and (max-width: 450px)': {
        padding: '20px 20px',

        h2: {
            fontSize: '1rem'
        },
        '& .circleBox': {
            '& .circle': {
                width: '5px',
                height: '5px',
                marginLeft: '3px'
            }
        },

        '& .btn': {
            marginTop: '20px',
            button: {
                padding: '5px 20px',
                fontSize: '.8rem',
                marginTop: '0px'
            }
        }
    }
}));
