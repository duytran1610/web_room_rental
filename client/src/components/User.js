import React, {memo} from 'react';
import { useSelector } from 'react-redux';
import avatar from '../assets/img/avatar.png';

const User = () => {

    // get infor current user from userReducer in redux store
    const {curData} = useSelector(state => state.user);

    return (
        <div className='flex items-center gap-2'>
            <img 
                src={curData?.avatar || avatar} 
                alt="avatar"
                className='w-10 h-10 object-cover rounded-[50%] border-2 border-white shadow-md' 
            />
            <div className='flex flex-col jus'>
                <span>
                    Hi, <span className='font-semibold'>{curData?.name}</span>
                </span>
                <span className='text-xs'>
                    Code account: <span>{`${curData?.id?.slice(0,10)}...`}</span>
                </span>
            </div>
        </div>
    )
}

export default memo(User);