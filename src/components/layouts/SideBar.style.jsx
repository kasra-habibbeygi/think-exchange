import styled from '@emotion/styled';

export const SideBarStyle = styled.aside(props => ({
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    direction: 'rtl',
    background: props.theme.colors.white,
    borderRadius: '28px',
    boxShadow: props.theme.boxShadow,
    padding: '40px 40px 40px 20px',
    fontSize: '.9rem',
    position: 'fixed',
    top: '50px',
    height: 'calc(100vh - 100px)',

    '& .menu': {
        listStyleType: 'none',
        marginTop: '60px',
        overflow: 'auto',

        li: {
            marginBottom: '10px',
            padding: '10px  15px',
            borderRadius: '12px',
            transition: 'all .1s linear',
            '&:hover': {
                background: props.theme.colors.gray
            },
            a: {
                display: 'flex',
                alignItems: 'center',
                color: props.theme.colors.black
            },

            span: {
                marginRight: '20px',
                width: '100%'
            }
        }
    },

    '& .callBox': {
        padding: '10px  15px',
        marginTop: '20px',

        '& .call': {
            display: 'flex',
            p: {
                marginRight: '20px',
                fontFamily: 'bold',
                marginBottom: '10px'
            }
        },
        '& .text': {
            display: 'inline-block'
        },
        '& .time': {
            marginRight: '37px'
        }
    },

    button: {
        color: props.theme.colors.error,
        padding: '10px  15px',
        justifyContent: 'right',
        borderRadius: '12px',

        '&:hover': {
            background: props.theme.colors.gray
        },
        img: {
            marginLeft: '20px'
        }
    }
}));
