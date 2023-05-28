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

export const AlertField = styled.div(props => ({
    width: '100%',
    borderRadius: '28px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '30px',

    img: {
        width: '120px'
    },

    p: {
        width: '500px',
        textAlign: 'center',
        lineHeight: '30px',
        marginTop: '20px',
        marginBottom: '30px'
    }
}));
