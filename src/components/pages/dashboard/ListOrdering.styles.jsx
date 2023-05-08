/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const ListOrderingStyle = styled.div(props => ({
    width: '55%',
    minHeight: '400px',
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

    '& .css-1130i26': {
        button: {
            padding: '8px 40px',
            '&:hover': {
                color: props.theme.colors.white
            }
        }
    }
}));
