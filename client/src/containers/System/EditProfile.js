import React, {useState} from 'react';
import { InputReadOnly, Input, Button } from '../../components';
import avatar from '../../assets/img/avatar.png';
import { useSelector } from 'react-redux';
import { getPartID } from '../../utils/Common/getNumbers';
import { apiUpdateUser } from '../../services';

// component to control info user
const EditProfile = () => {
    // get infor current user from userReducer in redux store
    const { curData } = useSelector(state => state.user);
    

    // payload (content user input)
    const [payload, setPayload] = useState({
        name: curData.name || '',
        avatar: curData.avatar || '',
        fbUrl: curData.fbUrl || '',
        zalo: curData.zalo || ''
    });

    // handleSumit 
    const handleSubmit = () => {
        apiUpdateUser(payload);
    }

    // handle upload file
    const handleUploadFile = (e) => {
        const img = e.target.files[0];
        if (img) {
            const imageUrl = URL.createObjectURL(img);
            setPayload(prev => ({...prev, avatar: imageUrl}));
        }
    }

    return (
        <div className='flex flex-col h-full items-center'>
            <h1 className='w-full h-[69px] text-start text-3xl font-medium py-4 border-b border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-3/5 flex-auto'>
                <div className='py-6 flex flex-col gap-4'>
                    <InputReadOnly 
                        label='Mã thành viên'
                        direction
                        value={`#${getPartID(curData?.id)}` || ''}
                    />
                    <InputReadOnly 
                        label='Số điện thoại'
                        direction
                        isPhone
                        value={curData?.phone || ''}
                    />
                    <Input
                        label='Tên hiển thị' 
                        direction
                        value={payload.name}
                        setValue={setPayload}
                        name='name'
                    />
                    <Input
                        label='Zalo' 
                        direction
                        value={payload.zalo}
                        setValue={setPayload}
                        name='zalo'
                    />
                    <Input
                        label='Facebook' 
                        direction
                        value={payload.fbUrl}
                        setValue={setPayload}
                        name='fbUrl'
                    />
                    <div className='flex'>
                        <label className='w-48 flex-none' htmlFor='password'>Password</label>
                        <small className='flex-auto text-blue-500 cursor-pointer'>Change password</small>
                    </div>
                    <div className='flex mb-6'>
                        <label className='w-48 flex-none' htmlFor='avatar'>Avatar</label>
                        <div>
                            <img src={payload.avatar || avatar} alt='avatar' className='w-28 h-28 rounded-full object-cover' />
                            <input onChange={(e) => handleUploadFile(e)} type='file' className='mt-4' id='avatar' />
                        </div>
                    </div>
                    <Button 
                        text='Update'
                        bgColor='bg-blue-600'
                        textColor='text-white'
                        onClick={() => handleSubmit()}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProfile;