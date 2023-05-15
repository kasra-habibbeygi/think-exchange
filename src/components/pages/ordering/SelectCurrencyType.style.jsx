/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const SelectCurrencyTypeStyle = styled.div(props => ({
    width: '49%',
    height: '165px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media screen and (max-width: 1210px)': {
        width: '100%'
    }
}));
