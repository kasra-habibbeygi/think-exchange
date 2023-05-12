/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const RefundStyles = styled.div(props => ({
    width: '43%',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },
    '@media screen and (max-width: 1210px)': {
        width: '100%'
    },
    '@media screen and (max-width: 450px)': {
        padding: '20px 20px',

        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        }
    }
}));
