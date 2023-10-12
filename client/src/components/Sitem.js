import React,{memo} from 'react';

const Sitem = ({title, price, img, createdAt}) => {
    return (
        <div className='w-full flex items-center gap-2 py-2 border-b border-gray-300'>
            <img 
                src={img[0] || "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png"}
                alt="img" 
                className='w-[65px] h-[65px] flex-none object-cover rounded-md'
            />
            <div className='gap-2 w-full'>
                <h4 className='text-blue-600 text-[15px]'>{`${title?.slice(0,45)}...`}</h4>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium text-green-500'>{price}</span>
                    <span className='text-sm text-gray-300'>{createdAt}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(Sitem);