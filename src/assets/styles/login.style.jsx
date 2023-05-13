/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const LoginStyle = styled.div(props => ({
    backgroundImage: ` url(${props.image}) no-repeat center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh'
}));
