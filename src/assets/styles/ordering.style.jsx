/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const OrderingStyle = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    alignItems: 'flex-start',
    '@media screen and (max-width: 1350px)': {},
    '@media screen and (max-width: 1210px)': {
        flexDirection: 'column'
    },
    '@media screen and (max-width: 992px)': {},
    '@media screen and (max-width: 730px)': {},
    '@media screen and (max-width: 620px)': {},
    '@media screen and (max-width: 450px)': {},
    '@media screen and (max-width: 350px)': {}
}));
