/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const UploadFileStyle = styled.div(props => ({
    '@media screen and (max-width: 450px)': {
        '& .upload': {
            color: '#727A89',
            display: 'flex',
            flexDirection: 'column',
            background: props.theme.colors.gray,
            borderRadius: '20px',
            padding: '40px 15px',

            p: {
                fontSize: '1rem',
                marginTop: '20px'
            }
        },
        '@media screen and (max-width: 450px)': {
            '& .upload': {
                img: {
                    width: '30px'
                },
                p: {
                    fontSize: '.8rem'
                }
            }
        }
    }
}));
