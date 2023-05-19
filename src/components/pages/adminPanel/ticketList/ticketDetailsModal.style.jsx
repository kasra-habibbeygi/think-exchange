import styled from '@emotion/styled';

export const ModalField = styled.div({
    '& .MuiPaper-root': {
        borderRadius: '20px',
        width: '700px'
    },

    '& .info_row': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '10px',
        marginBottom: '20px',

        p: {
            fontWeight: ' bold'
        },

        span: {
            color: '#5a5a5a'
        }
    },

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
    },

    '& .modalBox': {
        padding: '40px 60px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'props.theme.colors.black',

        button: {
            textAlign: 'center',
            justifyContent: 'center',
            borderRadius: '10px'
        }
    },

    '@media screen and (max-width: 992px)': {
        '& .MuiPaper-root': {
            maxWidth: '600px'
        }
    },

    '@media screen and (max-width: 730px)': {
        '& .MuiPaper-root': {
            maxWidth: '500px'
        },

        '& .modalBox': {
            padding: '20px'
        }
    },

    '@media screen and (max-width: 550px)': {
        '& .MuiPaper-root': {
            margin: '10px'
        }
    },

    '@media screen and (max-width: 450px)': {
        fontSize: '.8re',

        h2: {
            fontSize: '1rem',
            marginBottom: '20px'
        },

        '& .modalBox': {
            fontSize: '0.8rem'
        },

        button: {
            fontSize: '.8rem',
            padding: '5px 20px'
        },

        '& .formBox': {
            p: {
                marginBottom: '20px'
            }
        }
    }
});
