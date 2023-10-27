import React, {useState} from 'react';
import { InputReadOnly, Input, Button } from '../../components';
import avatar from '../../assets/img/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { getPartID } from '../../utils/Common/getNumbers';
import { apiUpdateUser } from '../../services';
import { fileToBase64, blobToBase64 } from '../../utils/Common/toBase64';
import * as actions from '../../store/actions';
import Swal from 'sweetalert2';

// component to control info user
const EditProfile = () => {
    // get infor current user from userReducer in redux store
    const { curData } = useSelector(state => state.user);

    // dispatch
    const dispatch = useDispatch();
    

    // payload (content user input)
    const [payload, setPayload] = useState({
        name: curData.name || '',
        avatar: blobToBase64(curData.avatar) || '',
        fbUrl: curData.fbUrl || '',
        zalo: curData.zalo || ''
    });

    // handleSumit 
    const handleSubmit = async() => {
        const response = await apiUpdateUser(payload);
        if (response.data.err === 0){
            Swal.fire('Success!', 'Updated user', 'success').then(() => {
                dispatch(actions.getUser());
            });
        }
        else {
            Swal.fire('Ooops...', 'Cannot update user', 'error');
        }
    }

    // handle upload file
    const handleUploadFile = async (e) => {
        const imgBase64 = await fileToBase64(e.target.files[0]);

        if (imgBase64) {
            setPayload(prev => ({...prev, avatar: imgBase64}));
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