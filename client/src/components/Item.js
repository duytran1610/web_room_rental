import {memo, useState, useEffect} from 'react';
import icons from '../utils/icons';
import { Link } from 'react-router-dom';
import {formatVietnameseToString} from '../utils/Common/formatVietnameseToString';

const {BsStarFill, AiFillHeart, AiOutlineHeart, BsBookmarkStarFill} = icons;

const Item = ({address, attrs, description, imgs, star, title, user, id}) => {
    // check hover
    const [isHover, setIsHover] = useState(false);

    // control star
    const [stars, setStars] = useState([]);

    useEffect(() => {
        let temp = [];

        for (let i = 1; i <= star; i++) temp.push(<BsStarFill className='star-item' size={18} color='yellow' />);

        setStars(temp);
    }, [star]);

    return (
        <div className='w-full flex border-t border-orange-600 py-4'>
            <Link 
                to={`detail/${formatVietnameseToString(title)}/${id}`} 
                className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
            >
                {imgs.length > 0 && imgs.filter((i, index) => index < 4)?.map((item, index) => 
                    <img key={index} src={item} alt="preview" className="w-[47%] h-[120px] object-cover" />                   
                )}
                <span className='bg-overlay70 text-white px-2 rounded-md absolute left-1 bottom-4'>{`${imgs.length} imgs`}</span>
                <span 
                    className=' text-white absolute right-9 bottom-1'
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {isHover ? <AiFillHeart size={24} color='red' /> : <AiOutlineHeart size={24} />}
                </span>
            </Link>
            <div className='w-3/5'>
                <div className='flex justify-between gap-3 w-full'>
                    <div className=' text-red-600 font-medium uppercase'>
                        {stars.length > 0 && stars.map((item, index) => 
                            <span key={index}>{item}</span>
                        )}
                        {title}
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill size={24} color='orange' />
                    </div>               
                </div>
                <div className='my-2 flex items-center gap-2'>
                    <span className='font-bold flex-3 text-green-600 whitespace-nowrap text-ellipsis overflow-hidden'>{attrs?.price}</span>
                    <span className='flex-1'>{attrs.acreage}</span>
                    <span className='flex-3 whitespace-nowrap text-ellipsis overflow-hidden'>{`${address.split(',')[address.split(',').length-2]}, ${address.split(',')[address.split(',').length - 1]}`}</span>
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