/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const DashboardStyle = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',

    '@media screen and (max-width: 1210px)': {
        flexDirection: 'column'
    }
}));
