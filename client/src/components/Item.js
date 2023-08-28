import {memo, useState} from 'react';
import icons from '../utils/icons';

const indexs = [0, 1, 2, 3];

const {BsStarFill, AiFillHeart, AiOutlineHeart, BsBookmarkStarFill} = icons;

const Item = ({address, attrs, description, imgs, star, title, user}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className='w-full flex border-t border-orange-600 py-4'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
                {imgs.length > 0 && imgs.filter((i, index) => indexs.some(i => i === index))?.map((item, index) => 
                    <img key={index} src={item} alt="preview" className="w-[130px] h-[120px] object-cover" />                   
                )}
                <span className='bg-overlay70 text-white px-2 rounded-md absolute left-1 bottom-4'>{`${imgs.length} imgs`}</span>
                <span 
                    className=' text-white absolute right-9 bottom-1'
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {isHover ? <AiFillHeart size={24} color='red' /> : <AiOutlineHeart size={24} />}
                </span>
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between gap-3 w-full'>
                    <div className=' text-red-600 font-medium uppercase'>
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        {title}
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill size={24} color='orange' />
                    </div>               
                </div>
                <div className='my-2 flex justify-between'>
                    <span className='font-bold text-green-600'>{attrs?.price}</span>
                    <span>{attrs.acreage}</span>
                    <span>{address}</span>
                </div>
                <p className='text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden'>
                    {description}
                </p>
                <div className='flex items-center my-3 justify-between'>
                    <div className='flex items-center'>
                        <img 
                            src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" 
                            alt="avatar" 
                            className='w-[30px] h-[30px] object-cover rounded-full' 
                        />
                        <p>{user?.name}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button
                            className="bg-blue-700 text-white p-1 rounded-md"
                        >
                            {`Call ${user.phone}`}
                        </button>
                        <button
                            className="text-blue-700 px-1 rounded-md border border-blue-700"
                        >
                            Ib zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item);