/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

//style
import { ModalField } from './editCurencyModal.style';

//mui
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

//components
import CustomInput from '../../../form-group/CustomInput.jsx';
import CustomButton from '../../../form-group/CustomButton';

// APIs
import { EditCurency } from '../../../../api-requests/admin/curencies';
import { toast } from 'react-hot-toast';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const EditCurencyModal = ({ specificCurency, status, setStatus, reLoad, setReLoad }) => {
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        price: '',
        change_rate: '',
        iso_name: '',
        name: ''
    });

    const validatFrom = () => {
        if (formData.iso_name === specificCurency.iso_name) {
            toast.error('در صورتی که نام لاتین را تغییر نداده اید ، آن را خالی بگذارید !');
            return false;
        } else if (isNaN(formData.price)) {
            toast.error('مقدار قیمت وارد شده باید عدد باشد !');
            return false;
        }
        return true;
    };

    useEffect(() => {
        setFormData({
            price: specificCurency?.price,
            change_rate: specificCurency?.change_rate,
            iso_name: '',
            name: specificCurency?.name
        });
    }, [specificCurency]);

    const changeHandeler = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addTicketsHandeler = () => {
        if (validatFrom()) {
            setLoader(true);
            EditCurency(formData, specificCurency.id).then(() => {
                setLoader(false);
                setReLoad(!reLoad);
                setStatus(false);
            });
        }
    };

    return (
        <ModalField>
            <Dialog open={status} TransitionComponent={Transition} keepMounted onClose={() => setStatus(false)} disablePortal>
                <div className='modalBox'>
                    <h2>ویرایش ارز {specificCurency?.name}</h2>
                    <div className='formBox'>
                        <CustomInput label='نام ارز' type='text' valuehandler={changeHandeler} name='name' value={formData.name} />
                        <CustomInput
                            label='نام لاتین'
                            type='text'
                            valuehandler={changeHandeler}
                            name='iso_name'
                            value={formData.iso_name}
                        />
                        <CustomInput label='قیمت' type='text' valuehandler={changeHandeler} name='price' value={formData.price} />
                        <CustomInput
                            label='درصد نوسان'
                            type='text'
                            valuehandler={changeHandeler}
                            name='change_rate'
                            value={formData.change_rate}
                        />
                    </div>
                    <div className='btnBox'>
                        <CustomButton
                            clickHandeler={addTicketsHandeler}
                            className='btn'
                            text='ویرایش ارز'
                            variant='text'
                            background='garadient'
                            radius='normal'
                            fontcolor='white'
                            loader={loader}
                        />

                        <CustomButton
                            clickHandeler={() => setStatus(false)}
                            className='close'
                            text='بازگشت'
                            variant='outlined'
                            background='white'
                            radius='normal'
                            fontcolor='black'
                        />
                    </div>
                </div>
            </Dialog>
        </ModalField>
    );
};

export default EditCurencyModal;
