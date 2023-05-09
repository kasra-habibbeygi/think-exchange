/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SelectOrderTypeStyle = styled.div(props => ({
    width: '49%',
    minHeight: '180px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h2: {
        fontSize: '1.2rem'
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
