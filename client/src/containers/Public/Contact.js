import React, { useState } from 'react';
import { InputForm, Button } from '../../components';
import Swal from 'sweetalert2';

// interface
const Contact = () => {
    //state
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        content: ''
    });

    // handleSubmit
    const handleSubmit = (payload) => {
        Swal.fire(`Thanks ${payload.name}!`, 'Phản hồi của bạn đã được chúng tôi ghi nhận!', 'success').then(() => {
            setPayload({
                name: '',
                phone: '',
                content: ''
            });
        });
    }

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-6'>Liên hệ với chúng tôi</h1>
            <div className='flex gap-4'>
                <div className='flex-1 flex flex-col h-fit gap-4 text-white rounded-3xl p-4 bg-gradient-to-br from-blue-700 to-cyan-400'>
                    <h4 className='font-medium'>Thông tin liên hệ</h4>
                    <span>Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa chọn PhongTro123.Com</span>
                    <span>Điện thoại: 0917 686 101</span>
                    <span>Email: cskh.phongtro123@gmail.com</span>
                    <span>Zalo: 0917 686 101</span>
                    <span>Viber: 0917 686 101</span>
                    <span>Địa chỉ: LD - 02.06, Toà nhà Lexington Residence, Số 67 Mai Chí Thọ, Phường An Phú, Quận 2, Tp. Hồ Chí Minh.</span>
                </div>
                <div className='flex-1 bg-white shadow-md rounded-md p-4'>
                    <h4 className='font-medium text-lg mb-4'>Liên hệ trực tuyến</h4>
                    <div className='flex flex-col gap-6'>
                        <InputForm
                            label='HỌ TÊN CỦA BẠN'
                            value={payload.name}
                            setValue={setPayload}
                            keyPayload='name'
                        />
                        <InputForm
                            label='SỐ ĐIỆN THOẠI'
                            value={payload.phone}
                            setValue={setPayload}
                            keyPayload='phone'
                        />
                        <div>
                            <label htmlFor='desc'>NỘI DUNG</label>
                            <textarea 
                                id='desc' 
                                className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full' 
                                cols='30' 
                                rows='3' 
                                value={payload.content}
                                onChange={(e) => setPayload(prev => ({...prev, content: e.target.value}))}
                                name='content'
                            />
                        </div>
                        <Button
                            text='Send contact'
                            bgColor='bg-blue-500'
                            textColor='text-white'
                            fullWidth
                            onClick={() => handleSubmit(payload)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;