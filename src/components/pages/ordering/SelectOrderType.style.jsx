/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SelectOrderTypeStyle = styled.div(props => ({
    width: '49%',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px 40px',
    display: 'flex',
    flexDirection: 'column',

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },

    '& .css-h2fkwh': {
        width: '49%',
        textAlign: 'right'
    },

    '& .container': {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));
