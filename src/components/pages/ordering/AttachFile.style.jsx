/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AttachFileStyle = styled.div(props => ({
    width: '25%',
    minHeight: '400px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));
