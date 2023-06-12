import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    width: '100%',
    minHeight: '400px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',

    '& .button_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },

    '& .table_field': {
        width: '100%',
        overflow: 'auto',
        paddingBottom: '20px',

        '& ::-webkit-scrollbar': {
            width: 'unset',
            height: '5px'
        },

        '& ::-webkit-scrollbar-track': {
            background: '#ebebeb'
        },

        '& ::-webkit-scrollbar-thumb': {
            background: 'rgb(197, 197, 197)'
        },

        '& ::-webkit-scrollbar-thumb:hover': {
            background: 'rgb(85, 94, 129)'
        },

        table: {
            minWidth: '1050px'
        }
    },

    h2: {
        fontSize: '1.2rem',
        marginBottom: '40px'
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

export const ModalField = styled.div({
    '& .MuiPaper-root': {
        borderRadius: '20px',
        width: '700px'
    },

    '& .empty_field': {
        width: '100%',
        textAlign: 'center',
        padding: '120px 20px'
    },

    '@media screen and (max-width: 992px)': {
        '& .MuiPaper-root': {
            maxWidth: '600px'
        }
    },

    '@media screen and (max-width: 730px)': {
        '& .MuiPaper-root': {
            maxWidth: '500px'
        }
    },

    '@media screen and (max-width: 550px)': {
        '& .MuiPaper-root': {
            margin: '10px'
        }
    }
});
