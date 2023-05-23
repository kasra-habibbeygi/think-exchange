import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    width: '100%',
    minHeight: '400px',
    background: props.theme.colors.white,
    boxShadow: props.theme.boxShadow,
    borderRadius: '28px',
    padding: '20px 30px',

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
            minWidth: '1000px'
        }
    },

    '& .button_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: 'max-content',
        margin: '0 auto'
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
