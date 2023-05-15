/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AccountStyle = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',

    '& .rightBox': {
        width: '30%'
    },

    button: {
        '&:hover': {
            color: props.theme.colors.white
        }
    },
    '@media screen and (max-width: 1210px)': {
        flexDirection: 'column',
        '& .rightBox': {
            display: 'flex',
            marginTop: '20px',
            gap: '20px',
            width: '100%'
        }
    },
    '@media screen and (max-width: 700px)': {
        '& .rightBox': {
            flexDirection: 'column'
        }
    }
}));
