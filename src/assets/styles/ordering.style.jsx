/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const OrderingStyle = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    '@media screen and (max-width: 1210px)': {
        flexDirection: 'column',
        '&:last-of-type': {
            flexDirection: 'column-reverse'
        }
    }
}));
