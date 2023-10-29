import React, {memo} from 'react';
import { useSelector } from 'react-redux';
import avatar from '../assets/img/avatar.png';
import { blobToBase64 } from '../utils/Common/toBase64';
import { getPartID } from '../utils/Common/getNumbers';

const User = () => {

    // get infor current user from userReducer in redux store
    const {curData} = useSelector(state => state.user);

    return (
        <>
            {curData && Object.keys(curData).length > 0 && 
            <div className='flex items-center gap-2'>
                <img 
                    src={blobToBase64(curData?.avatar) || avatar} 
                    alt="avatar"
                    className='w-10 h-10 object-cover rounded-[50%] border-2 border-white shadow-md' 
                />
                <div className='flex flex-col jus'>
                    <span>
                        Hi, <span className='font-semibold'>{curData?.name}</span>
                    </span>
                    <span className='text-xs'>
                        Code account: <span>{getPartID(curData.id)}</span>
                    </span>
                </div>
            </div>}
        </>
    )
}

export default memo(User);