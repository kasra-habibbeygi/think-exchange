import styled from '@emotion/styled';

export const SideBarStyle = styled.aside(props => ({
    '& .main_field': {
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '0 3px',
        div: {
            width: '100%'
        }
    },

    '& .SideBar': {
        position: 'fixed',
        top: '50px',
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
        height: 'calc(100vh - 100px)',
        zIndex: '100',
        transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s'
    },

    '& .container': {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        background: 'rgba(0,0,0,0.5)',
        zIndex: '99',
        top: '0px',
        left: '0px',
        opacity: '0',
        pointerEvents: 'none',
        transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s'
    },

    '& .hambergureMenu': {
        display: 'none',
        position: 'absolute',
        top: '30px',
        right: '30px',
        textAlign: 'center',
        padding: '0px',
        background: 'transparent',
        lineHeight: '0px',
        borderRadius: '50%',

        '& .icon': {
            width: '30px',
            height: '30px',
            marginLeft: 'unset'
        }
    },

    '& .phoneCall': {
        display: 'inline-flex',
        flexDirection: 'row-reverse'
    },

    '& .menu': {
        listStyleType: 'none',
        marginTop: '60px',
        overflow: 'auto',

        li: {
            a: {
                display: 'flex',
                alignItems: 'center',
                color: props.theme.colors.black,
                marginBottom: '10px',
                padding: '10px  15px',
                borderRadius: '12px',
                transition: 'all .1s linear',

                '&.active': {
                    color: '#4A68FF',

                    img: {
                        filter: 'invert(32%) sepia(81%) saturate(1243%) hue-rotate(211deg) brightness(105%) contrast(104%)'
                    }
                },

                '&:hover': {
                    background: props.theme.colors.gray
                }
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
        minWidth: 'max-content',

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
    },

    '@media screen and (max-width: 1350px)': {
        '& .SideBar': {
            height: 'calc(100vh - 40px)',
            top: '20px'
        }
    },
    '@media screen and (max-width: 1200px)': {
        '& .SideBar': {
            top: '20px',
            height: 'calc(100vh - 40px)',
            width: '280px',
            padding: '30px 20px 30px 20px'
        }
    },

    '@media screen and (max-width: 992px)': {
        '& .hambergureMenu': {
            display: 'block'
        },

        '& .SideBar': {
            right: props.menu ? '0' : '-300px',
            position: 'fixed',
            borderRadius: '20px 0px 0px 20px',
            height: '100vh',
            top: '0px'
        },

        '& .container': {
            opacity: props.menu ? '1' : '0',
            pointerEvents: props.menu ? 'initial' : 'none'
        }
    },
    '@media screen and (max-width: 450px)': {
        '& .hambergureMenu': {
            top: '20px',
            right: '15px',

            '& .icon': {
                width: '25px',
                height: '25px'
            }
        },
        '& .SideBar': {
            fontSize: '.8rem',
            width: '260px',
            padding: '20px 20px 0px 10px',
            '& .menu': {
                marginTop: '30px'
            },
            '& .callBox': {
                marginTop: '10px'
            }
        }
    }
}));
