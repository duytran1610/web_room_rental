import React, {useState} from 'react';
import { InputReadOnly, Input, Button } from '../../components';
import avatar from '../../assets/img/avatar.png';

// component to control info user
const EditProfile = () => {
    // state
    const [invalidFields, setInvalidFields] = useState([]);

    return (
        <div className='flex flex-col h-full items-center'>
            <h1 className='w-full h-[69px] text-start text-3xl font-medium py-4 border-b border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-3/5 flex-auto'>
                <div className='py-6 flex flex-col gap-4'>
                    <InputReadOnly 
                        label='Mã thành viên'
                        direction
                    />
                    <InputReadOnly 
                        label='Số điện thoại'
                        direction
                        isPhone
                    />
                    <Input
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        label='Tên hiển thị' 
                        direction
                    />
                    <Input
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        label='Email' 
                        direction
                    />
                    <Input
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        label='Zalo' 
                        direction
                    />
                    <Input
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        label='Facebook' 
                        direction
                    />
                    <div className='flex'>
                        <label className='w-48 flex-none' htmlFor='password'>Password</label>
                        <small className='flex-auto text-blue-500 cursor-pointer'>Change password</small>
                    </div>
                    <div className='flex mb-6'>
                        <label className='w-48 flex-none' htmlFor='avatar'>Avatar</label>
                        <img src={avatar} alt='avatar' className='w-28 h-28 rounded-full object-cover' />
                    </div>
                    <Button 
                        text='Update'
                        bgColor='bg-blue-600'
                        textColor='text-white'
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProfile;