import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    width: '100%',
    minHeight: '400px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },

    '& .formBox': {
        width: '100%',
        display: 'flex',
        gap: '20px'
    },

    '& .curency_name': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 auto',
        width: '230px',

        img: {
            width: '40px',
            height: '40px',
            objectFit: 'cover',
            borderRadius: '50px'
        }
    },

    '& .percentage': {
        direction: 'ltr',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 auto',
        width: 'max-content'
    },

    '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },

    '& .table_button': {
        padding: '3px 20px'
    },

    '@media screen and (max-width: 450px)': {
        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        }
    }
}));
