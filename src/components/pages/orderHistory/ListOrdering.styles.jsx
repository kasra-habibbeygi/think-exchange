/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const ListOrderingStyle = styled.div(props => ({
    width: '55%',
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

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },

    a: {
        button: {
            padding: '8px 40px',
            marginTop: '50px',
            '&:hover': {
                color: props.theme.colors.white
            }
        }
    },
    '@media screen and (max-width: 1210px)': {
        width: '100%',
        marginBottom: '20px'
    }
}));
