/* eslint-disable react/prop-types */
import React from 'react';

//style
import { SeeAnsewrStyle } from './SeeAnsewr.style';

//mui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomButton from '../../../form-group/CustomButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const AddNewTicketsModal = ({ state, setState }) => {
    const handleClose = () => {
        setState(false);
    };

    return (
        <SeeAnsewrStyle>
            <Dialog open={state} TransitionComponent={Transition} keepMounted onClose={handleClose} disablePortal>
                <div className='modalBox'>
                    <h2>پاسخ تیکت </h2>
                    <div className='formBox'>
                        <p className='title'>
                            عنوان تیکت
                            <span>عنوان پاسخ</span>
                        </p>
                        <p className='title'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                            هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                            پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                            سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                            طراحی اساسا مورد استفاده قرار گیرد.
                            <span>متن پاسخ</span>
                        </p>
                    </div>
                    <div className='btnBox'>
                        <CustomButton
                            clickHandeler={handleClose}
                            className='close'
                            text='بازگشت'
                            variant='outlined'
                            background='error'
                            radius='normal'
                            fontcolor='white'
                        />
                    </div>
                </div>
            </Dialog>
        </SeeAnsewrStyle>
    );
};

export default AddNewTicketsModal;
