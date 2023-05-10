/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AccountStyle = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',

    '& .rightBox': {
        width: '25%'
    },

    button: {
        '&:hover': {
            color: props.theme.colors.white
        }
    }
}));
