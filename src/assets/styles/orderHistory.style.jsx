/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const OrderHistoryStyle = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '@media screen and (max-width: 1210px)': {
        flexDirection: 'column'
    },
    '@media screen and (max-width: 450px)': {
        padding: '20px 20px',

        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        }
    }
}));
