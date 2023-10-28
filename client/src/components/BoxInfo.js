import React, {memo} from 'react'
import avartar from '../assets/img/avatar.png';
import icons from '../utils/icons';

const {GoDotFill, BsFillTelephoneFill, SiZalo} = icons;

// use in page detail post part sidebar
const BoxInfo = ({user}) => {
    return (
        <div className='w-full bg-yellow-600 rounded-md flex flex-col items-center p-4 gap-2'>
            <img src={avartar} alt='avatar' className='w-16 h-16 object-cover rounded-full' />
            <h3 className='font-medium text-xl'>{user?.name}</h3>
            <span className='flex items-center gap-1'>
                <GoDotFill color='green' size={12} />
                <span>Đang hoạt động</span>
            </span>
            {/* href='tel:phone_number' -> call */}
            <a href="tel:" className='bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-lg'>
                <BsFillTelephoneFill />
                {user?.phone}
            </a>
            <a href={`https://zalo.me/${user?.zalo}`} className='bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md font-bold text-lg'>
                <SiZalo color='blue' size={24}/>
            </a>
        </div>
    )
}

export default memo(BoxInfo);