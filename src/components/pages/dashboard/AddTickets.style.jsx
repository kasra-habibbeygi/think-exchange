/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const AddTicketsStyle = styled.div(props => ({
    width: '43%',
    minHeight: '400px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    td: {
        div: {
            textAlign: 'center'
        }
    },

    h2: {
        fontSize: '1.2rem'
    },

    '& .circleBox': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .circle': {
            borderRadius: '50%',
            width: '10px',
            height: '10px',
            background: props.theme.colors.error,
            marginLeft: '5px'
        }
    },

    '& .btn': {
        marginTop: '30px'
    },

    '@media screen and (max-width: 1350px)': {
        width: '49%'
    },

    '@media screen and (max-width: 1210px)': {
        width: '100%',
        marginBottom: '20px'
    }
}));
